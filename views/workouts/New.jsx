const React = require('react');
const Layout = require('../Layouts/Layout')
function New(props) {
    return (
        <Layout token={props.token}>
            <div className="form-box">
                <h2>New Workout Page</h2>
                <div id='schedule'>
                    <form action={`/workouts?token=${props.token}`} method="POST">
                        Title: <input className='sameSize' type="text" name="title" required /><br />
                        Duration (in minutes): <input className='sameSize' type="number" name="duration" required /><br />
                        Description: <input className="descrp" type="text" name="description" required /><br />

                        Intensity:
                        <select className='sameSize' name="intensity" required>
                            <option value="">--Select Intensity--</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select><br />
                        Category:
                        <input className='sameSize' type="text" name="category" required /><br />

                        <input className="BtnStyle" type="submit" value="Create Workout" />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

module.exports = New;
