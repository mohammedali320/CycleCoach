const React = require('react');

function New(props) {
    return (
        <div>
            <h1>New Category Page</h1>
            <a href={`/categories?token=${props.token}`}>Go back to Index Page</a>
            <form action={`/categories?token=${props.token}`} method="POST">
                Name:
                <input type="text" name="name" required/><br/>
                Description:
                <input type="text" name="description" required/><br/>
                <br />
                <input type="submit" value="Create Category" />
            </form>
        </div>
    );
}

module.exports = New;
