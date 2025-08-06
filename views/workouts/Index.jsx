const React = require('react')
const Layout= require('../Layouts/Layout')

function Index (props){
    const workouts = props.workouts
    const token = props.token;
    return (
        <Layout token={props.token}>
            <div className="form-box">
            <h2>Added workouts:</h2>
            <div id='schedule'>
            <ul id='things'>
                {
                   workouts.map((workout) => {
                    return (<li id='cat'>workout: <a id='thing' href={`/workouts/${workout.id}?token=${props.token}`}>{workout.title}</a>, duration: {workout.duration}</li>)
                   }) 
                }
            </ul>
            </div>
            </div>
        </Layout>
    )
}

module.exports = Index