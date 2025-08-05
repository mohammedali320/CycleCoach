const React = require('react');
const Layout= require('../Layouts/Layout')
function New(props) {
    return (
        <Layout token={props.token}>
            <h>New Workout Page</h>
            <a href={`/workouts?token=${props.token}`}>Go back to Index Page</a>
            <form action={`/workouts?token=${props.token}`} method="POST">
                Title: <input type="text" name="title" required /><br />
                Duration (in minutes): <input type="number" name="duration" required /><br />
                Description: <textarea name="description" required></textarea><br />
                
                Intensity:
                <select name="intensity" required>
                    <option value="">--Select Intensity--</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select><br />
                Category:
                <input type="text" name="category" required/><br/>

                <input type="submit" value="Create Workout" />
            </form>
        </Layout>
    );
}

module.exports = New;
