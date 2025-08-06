const React = require('react');
const Layout = require('../Layouts/Layout')

function Edit(props) {
    const { _id, title, duration, description, intensity, category } = props.workout;

    return (
        <Layout token={props.token}>
            <div className="form-box">
                <h2>Edit Workout: {title}</h2>
                <div id='schedule'>
                    <form action={`/workouts/${_id}?_method=PUT&token=${props.token}`} method="POST">
                        <label>
                            Title:
                            <input className='sameSize' type="text" name="title" defaultValue={title} required /><br />
                        </label>
                        <br />

                        <label>
                            Duration (minutes):
                            <input className='sameSize' type="number" name="duration" defaultValue={duration} required /><br />
                        </label>
                        <br />

                        <label>
                            Description:
                            <input className="descrp" type="text" name="description" defaultValue={description} required /><br />
                        </label>
                        <br />

                        <label>
                            Intensity:
                            <select className='sameSize' name="intensity" defaultValue={intensity} required>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select><br />
                        </label>
                        <br />

                        <label>
                            Category:
                            <input className='sameSize' type="text" name="category" defaultValue={category} required /><br />
                        </label>
                        <br />

                        <input className="BtnStyle" type="submit" value="Update Workout" />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

module.exports = Edit;

