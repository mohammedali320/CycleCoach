const React = require('react');
const Layout = require('../Layouts/Layout')

function Show(props) {
  const category = props.category;
  const allWorkouts = props.allWorkouts || [];
  const token = props.token;

  // Filter workouts assigned to this category (by name)
  const filteredWorkouts = allWorkouts.filter(workout => workout.category === category.name);

  return (
    <Layout token={props.token}>
      <div className="form-box">
        <h2>{category.name}</h2>
        <div className='in-box'>
          <p><span class='discription'>Description: </span>{category.description}</p>

          <div>
            <form action={`/categories/${category._id}?_method=DELETE&token=${token}`} method="POST">
              <input className="BtnStyle" type="submit" value={`Delete this Cat`} />
            </form>
          </div><br />

          <div>
            <a href={`/categories/${category._id}/edit?token=${token}`}>
              <button className="BtnStyle">Edit {category.name}</button>
            </a>
          </div>

          <div style={{ marginTop: '20px' }}>
            <a href={`/workouts/new?category=${category._id}&token=${token}`}>
              <button className="BtnStyle">Add Workout to This Category</button>
            </a>
          </div>

          <hr />

          <h2>Workouts in this Category</h2>
          {filteredWorkouts.length > 0 ? (
            <ul>
              {filteredWorkouts.map(workout => (
                <li id='things' key={workout._id}>
                  <a id='thing' href={`/workouts/${workout._id}?token=${token}`}>
                    {workout.title} — {workout.duration} min ({workout.intensity})
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No workouts in this category yet.</p>
          )}

        </div>
      </div>
    </Layout>
  );
}

module.exports = Show;
