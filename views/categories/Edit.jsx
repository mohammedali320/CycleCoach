const React = require('react');
const Layout= require('../Layouts/Layout')

function Edit(props) {
    const { name, description, _id } = props.category;


    return (
        <Layout token={props.token}>
            <h>Edit Category: {name}</h>
            <form action={`/categories/${_id}?_method=PUT&token=${props.token}`} method="POST">
                <label>
                    Name:
                    <input type="text" name="name" defaultValue={name} /><br/>
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" defaultValue={description} required /><br/>
                </label>
                <br />
                <input type="submit" value="Update Category" />
            </form>
        </Layout>
    );
}

module.exports = Edit;
