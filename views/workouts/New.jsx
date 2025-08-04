const React = require('react');

function New(props) {
    return (
        <div>
            <h1>New Workout Page</h1>
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
                <select name="category" required>
                    <option value="">--Select Category--</option>
                    <option value="Endurance">Endurance</option>
                    <option value="Tempo">Tempo</option>
                    <option value="Threshold">Threshold</option>
                </select><br />

                <input type="submit" value="Create Workout" />
            </form>
        </div>
    );
}

module.exports = New;
