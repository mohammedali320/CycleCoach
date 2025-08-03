const React = require('react');

function Edit(props) {
    const { title, _id, duration, description } = props.workout;

    return (
        <div>
            <h1>{title} Edit Page</h1>
            <a href={`/workouts?token=${props.token}`}>Go back to Index Page</a>
            <form action={`/workouts/${_id}?_method=PUT&token=${props.token}`} method="POST">
                <label>
                    Title: <input type="text" name="title" defaultValue={title} />
                </label>
                <br />
                <label>
                    Duration: <input type="text" name="duration" defaultValue={duration} />
                </label>
                <br />
                <label>
                    Description: <input type="text" name="description" defaultValue={description} />
                </label>
                <br />
                <input type="submit" value="Update Workout" />
            </form>
        </div>
    );
}

module.exports = Edit;
