const React = require('react');
const Layout = require('../Layouts/Layout')

function Schedule(props) {
  const user = props.user;
  const workouts = user.workouts || [];
  const token = props.token;

  return (
    <Layout token={props.token}>
      <div className="form-box">
        <h2> Workouts Schedule</h2>
        <div id='schedule'>
          {workouts.length > 0 ? (
            <ul id='things'>
              {workouts.map(workout => (
                <li key={workout._id}>
                  <a id='thing' href={`/users/schedule/workout/${workout._id}?token=${token}`}>
                    {workout.title} — {workout.duration} min ({workout.intensity})
                  </a>

                </li>
              ))}
            </ul>
          ) : (
            <p>No workouts added to your schedule yet.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Schedule;
