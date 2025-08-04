const React = require('react');

function Edit(props) {
  const { title, _id, duration, description, intensity, category } = props.workout;

  return (
    <div>
      <h1>{title} Workout Edit Page</h1>
      <a href={`/workouts?token=${props.token}`}>Go back to workouts Page</a>

      <form action={`/workouts/${_id}?_method=PUT&token=${props.token}`} method="POST">
        <div>
          <label htmlFor="title">Title: </label><br />
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            required
          />
        </div>

        <div>
          <label htmlFor="duration">Duration (in minutes): </label><br />
          <input
            type="number"
            id="duration"
            name="duration"
            defaultValue={duration}
            min="1"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description: </label><br />
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            required
          />
        </div>

        <div>
          <label htmlFor="intensity">Intensity: </label><br />
          <select
            id="intensity"
            name="intensity"
            defaultValue={intensity}
            required
          >
            <option value="">--Select Intensity--</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="category">Category: </label><br />
          <select
            id="category"
            name="category"
            defaultValue={category}
            required
          >
            <option value="">--Select Category--</option>
            <option value="Endurance">Endurance</option>
            <option value="Tempo">Tempo</option>
            <option value="Threshold">Threshold</option>
          </select>
        </div>

        <br />
        <input type="submit" value="Update Workout" />
      </form>
    </div>
  );
}

module.exports = Edit;
