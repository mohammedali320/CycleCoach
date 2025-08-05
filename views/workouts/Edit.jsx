const React = require('react');
const Layout= require('../Layouts/Layout')

function Edit(props) {
    const { _id, title, duration, description, intensity, category } = props.workout;

    return (
        <Layout token={props.token}>
            <h>Edit Workout: {title}</h>
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
        </Layout>
    );
}

module.exports = Edit;
