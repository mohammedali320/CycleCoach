const React = require('react');
const Layout = require('../Layouts/Layout')
function New(props) {
    return (
        <Layout token={props.token}>
            <div className="form-box">
                <h2>New Category Page</h2>
                <div id='schedule'>
                    <form action={`/categories?token=${props.token}`} method="POST">
                        <strong>Name:</strong>
                        <input className="name2" type="text" name="name" required /><br />
                        <strong>Description:</strong>
                        <input className="descrp" type="text" name="description" required /><br />
                        <br />
                        <input className="BtnStyle" type="submit" value="Create Category" />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

module.exports = New;
