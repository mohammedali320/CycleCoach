const React = require('react');

function Edit(props) {
    const { _id, title, duration, description, intensity, category } = props.workout;

    return (
        <div>
            <h1>Edit Workout: {title}</h1>
            <a href={`/workouts?token=${props.token}`}>Go back to Workouts Page</a>
            <form action={`/workouts/${_id}?_method=PUT&token=${props.token}`} method="POST">
                <label>
                    Title:
                    <input type="text" name="title" defaultValue={title} required /><br/>
                </label>
                <br />

                <label>
                    Duration (minutes):
                    <input type="number" name="duration" defaultValue={duration} required /><br/>
                </label>
                <br />

                <label>
                    Description:
                    <input type="text" name="description" defaultValue={description} required /><br/>
                </label>
                <br />

                <label>
                    Intensity:
                    <select name="intensity" defaultValue={intensity} required>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select><br/>
                </label>
                <br />

                <label>
                    Category:
                    <input type="text" name="category" defaultValue={category} required /><br/>
                </label>
                <br />

                <input type="submit" value="Update Workout" />
            </form>
        </div>
    );
}

module.exports = Edit;
