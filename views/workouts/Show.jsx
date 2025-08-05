const React = require('react');
const Layout= require('../Layouts/Layout')

function Show(props) {
  const workout = props.workout;
  const token = props.token;

  return (
    <Layout token={props.token}>
      <h>{workout.title}</h>
      
      <p><strong>Duration:</strong> {workout.duration} minutes</p>
      <p><strong>Description:</strong> {workout.description}</p>
      <p><strong>Intensity:</strong> {workout.intensity}</p>
      <p><strong>Category:</strong> {workout.category}</p>
      
      <form action={`/workouts/${workout._id}?_method=DELETE&token=${props.token}`} method="POST">
        <input type="submit" value={`Delete this ${workout.title}`} />
      </form>
      <div style={{ marginTop: '20px' }}>
        {/* Add to user Schedule (workouts) */}
        <form
          action={`/workouts/add/${workout._id}?token=${token}`}
          method="POST"
        >
          <button type="submit">Add to My Schedule</button>
        </form>
      </div>
      <div>
        <a href={`/workouts/${workout._id}/edit?token=${props.token}`}>
          <button>{`Edit this ${workout.title}`}</button>
        </a>
      </div>
    </Layout>
  );
}

module.exports = Show;
