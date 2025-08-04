const React = require('react');

function New(props) {
    return (
        <div>
            <h1>New Category Page</h1>
            <a href={`/categories?token=${props.token}`}>Go back to Index Page</a>
            <form action={`/categories?token=${props.token}`} method="POST">
                Name:
                <select name="name" required>
                    <option value="Endurance">Endurance</option>
                    <option value="Tempo">Tempo</option>
                    <option value="Threshold">Threshold</option>
                </select>
                <br />
                Description:
                <textarea name="description" required></textarea>
                <br />
                <input type="submit" value="Create Category" />
            </form>
        </div>
    );
}

module.exports = New;
