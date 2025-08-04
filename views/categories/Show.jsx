const React = require('react');

function Show(props) {
  const category = props.category;
  const allWorkouts = props.allWorkouts || [];
  const token = props.token;

  return (
    <div>
      <h1>{category.name}</h1>
      <a href={`/categories?token=${token}`}>Go back to Categories</a>

      <p><strong>Description:</strong> {category.description}</p>

      <form action={`/categories/${category._id}?_method=DELETE&token=${token}`} method="POST">
        <input type="submit" value={`Delete ${category.name}`} />
      </form>

      <div>
        <a href={`/categories/${category._id}/edit?token=${token}`}>
          <button>Edit {category.name}</button>
        </a>
      </div>

      <div style={{ marginTop: '20px' }}>
        <a href={`/workouts/new?category=${category._id}&token=${token}`}>
          <button>Add Workout to This Category</button>
        </a>
      </div>

      <hr />

      <h2>Workouts in this Category</h2>
      {category.workouts && category.workouts.length > 0 ? (
        <ul>
          {category.workouts.map(workout => (
            <li key={workout._id}>
              <a href={`/workouts/${workout._id}?token=${token}`}>
                {workout.title} — {workout.duration} min ({workout.intensity})
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts in this category yet.</p>
      )}

      <hr />

      <h2>All Workouts in the System</h2>
      {allWorkouts.length > 0 ? (
        <ul>
          {allWorkouts.map(workout => (
            <li key={workout._id}>
              <a href={`/workouts/${workout._id}?token=${token}`}>
                {workout.title} — {workout.duration} min ({workout.intensity})
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts found.</p>
      )}
    </div>
  );
}

module.exports = Show;
