const React = require('react');

function Schedule(props) {
  const user = props.user;
  const workouts = user.workouts || [];
  const token = props.token;

  return (
    <div>
      <h1>{user.name}'s Workout Schedule</h1>
      <a href={`/categories?token=${token}`}>Back to Categories</a>

      {workouts.length > 0 ? (
        <ul>
          {workouts.map(workout => (
            <li key={workout._id}>
              <a href={`/users/schedule/workout/${workout._id}?token=${token}`}>
                {workout.title} — {workout.duration} min ({workout.intensity})
              </a>

            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts added to your schedule yet.</p>
      )}
    </div>
  );
}

module.exports = Schedule;
