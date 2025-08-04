const React = require('react');

function Show(props) {
  const category = props.category;

  return (
    <div>
      <h1>{category.name}</h1>
      <a href={`/categories?token=${props.token}`}>Go back to Index Page</a>

      <p><strong>Description:</strong> {category.description}</p>

      <form action={`/categories/${category._id}?_method=DELETE&token=${props.token}`} method="POST">
        <input type="submit" value={`Delete this ${category.name}`} />
      </form>

      <div>
        <a href={`/categories/${category._id}/edit?token=${props.token}`}>
          <button>{`Edit this ${category.name}`}</button>
        </a>
      </div>
    </div>
  );
}

module.exports = Show;
