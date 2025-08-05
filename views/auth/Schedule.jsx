const React = require('react');
const Layout= require('../Layouts/Layout')

function Schedule(props) {
  const user = props.user;
  const workouts = user.workouts || [];
  const token = props.token;

  return (
    <Layout token={props.token}>
      <h>{user.name}'s Workouts Schedule</h>
    <div>

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
    </Layout>
  );
}

module.exports = Schedule;
