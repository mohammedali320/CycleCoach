const React = require('react');
const Layout = require('../Layouts/Layout')

function ViewWorkout(props) {
  const workout = props.workout;
  const token = props.token;

  return (
    <Layout token={props.token}>
      <div className="form-box">
        <div id='schedule'>
          <h2>{workout.title}</h2>

          <p><strong>Duration:</strong> <span class='span'>{workout.duration} minutes</span></p>
          <p><strong>Description:</strong> <span class='span'>{workout.description}</span></p>
          <p><strong>Intensity:</strong> <span class='span'>{workout.intensity}</span></p>

          {/* remove from schedule only */}
          <form action={`/workouts/remove/${workout._id}?token=${token}`} method="POST">
            <div className="divRemFromSch">
                        <button type="submit" className="RemFromSch">
                            Remove from My Schedule
                        </button>
                    </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ViewWorkout;
