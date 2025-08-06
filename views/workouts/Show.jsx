const React = require('react');
const Layout = require('../Layouts/Layout')

function Show(props) {
  const workout = props.workout;
  const token = props.token;

  return (
    <Layout token={props.token}>
      <div className="form-box">
        <h2>{workout.title}</h2>
        <div className='in-box'>
          <p><strong>Duration:</strong> {workout.duration} minutes</p>
          <p><strong>Description:</strong> {workout.description}</p>
          <p><strong>Intensity:</strong> {workout.intensity}</p>
          <p><strong>Category:</strong> {workout.category}</p>

          <form action={`/workouts/${workout._id}?_method=DELETE&token=${props.token}`} method="POST">
            <input className="BtnStyle" type="submit" value={`Delete this workout`} />
          </form>
          <div style={{ marginTop: '20px' }}>
            {/* Add to user Schedule (workouts) */}
            <form
              action={`/workouts/add/${workout._id}?token=${token}`}
              method="POST"
            >
              <button className="BtnStyle" type="submit">Add to My Schedule</button>
            </form>
            <br />
          </div>
          <div>
            <a href={`/workouts/${workout._id}/edit?token=${props.token}`}>
              <button className="BtnStyle" >{`Edit this workout`}</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Show;

