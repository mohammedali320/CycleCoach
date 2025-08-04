const React = require('react');

function Edit(props) {
    const { name, description, _id } = props.category;


    return (
        <div>
            <h1>Edit Category: {name}</h1>
            <a href={`/categories?token=${props.token}`}>Go back to Categories Page</a>
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
        </div>
    );
}

module.exports = Edit;
