const React = require('react');
const Layout= require('../Layouts/Layout')
function New(props) {
    return (
        <Layout token={props.token}>
            <h>New Category Page</h>
            <form action={`/categories?token=${props.token}`} method="POST">
                Name:
                <input type="text" name="name" required/><br/>
                Description:
                <input type="text" name="description" required/><br/>
                <br />
                <input type="submit" value="Create Category" />
            </form>
        </Layout>
    );
}

module.exports = New;
