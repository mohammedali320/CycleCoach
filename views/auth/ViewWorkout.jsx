const React = require('react');
const Layout= require('../Layouts/Layout')

function ViewWorkout(props) {
  const workout = props.workout;
  const token = props.token;

  return (
    <Layout token={props.token}>
      <h>{workout.title}</h>
      {/*<a href={`/users/schedule?token=${token}`}>← Back to My Schedule</a>*/}

      <p><strong>Duration:</strong> {workout.duration} minutes</p>
      <p><strong>Description:</strong> {workout.description}</p>
      <p><strong>Intensity:</strong> {workout.intensity}</p>

      {/* remove from schedule only */}
      <form action={`/workouts/remove/${workout._id}?token=${token}`} method="POST">
        <button type="submit">Remove from My Schedule</button>
      </form>
    </Layout>
  );
}

module.exports = ViewWorkout;
