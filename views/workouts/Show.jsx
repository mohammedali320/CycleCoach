const React = require('react');

function Show(props) {
  const workout = props.workout;
  
  return (
    <div>
      <h1>{workout.title}</h1>
      <a href={`/workouts?token=${props.token}`}>Go back to workouts Page</a>
      
      <p><strong>Duration:</strong> {workout.duration} minutes</p>
      <p><strong>Description:</strong> {workout.description}</p>
      <p><strong>Intensity:</strong> {workout.intensity}</p>
      <p><strong>Category:</strong> {workout.category}</p>
      
      <form action={`/workouts/${workout._id}?_method=DELETE&token=${props.token}`} method="POST">
        <input type="submit" value={`Delete this ${workout.title}`} />
      </form>

      <div>
        <a href={`/workouts/${workout._id}/edit?token=${props.token}`}>
          <button>{`Edit this ${workout.title}`}</button>
        </a>
      </div>
    </div>
  );
}

module.exports = Show;
