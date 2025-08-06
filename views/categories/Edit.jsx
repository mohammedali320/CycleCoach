const React = require('react');
const Layout = require('../Layouts/Layout')

function Edit(props) {
    const { name, description, _id } = props.category;


    return (
        <Layout token={props.token}>
            <div className="form-box">
                <h2>Edit Category: {name}</h2>
                <div id='schedule'>
                    <form action={`/categories/${_id}?_method=PUT&token=${props.token}`} method="POST">
                        <label>
                            <strong>Name:</strong>
                            <input className="name" type="text" name="name" defaultValue={name} /><br />
                        </label>
                        <br />
                        <label>
                            <strong>Description:</strong>
                            <input className="descrp" type="text" name="description" defaultValue={description} required /><br />
                        </label>
                        <br />
                        <input className="BtnStyle" type="submit" value="Update Category" />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

module.exports = Edit;
