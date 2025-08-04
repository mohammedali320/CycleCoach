const React = require('react');

function Edit(props) {
    const { name, description, _id } = props.category;

    return (
        <div>
            <h1>Edit Category: {name}</h1>
            <a href={`/categories?token=${props.token}`}>Go back to Categories Index</a>
            <form action={`/categories/${_id}?_method=PUT&token=${props.token}`} method="POST">
                <label>
                    Name: <input type="text" name="name" defaultValue={name} required />
                </label>
                <br />
                <label>
                    Description: <textarea name="description" defaultValue={description} required></textarea>
                </label>
                <br />
                <input type="submit" value="Update Category" />
            </form>
        </div>
    );
}

module.exports = Edit;
