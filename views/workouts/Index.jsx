const React = require('react')
const Layout= require('../Layouts/Layout')

function Index (props){
    const workouts = props.workouts
    const token = props.token;
    return (
        <Layout token={props.token}>
            <h>Added workouts:</h>

            <ul>
                {
                   workouts.map((workout) => {
                    return (<li>workout: <a href={`/workouts/${workout.id}?token=${props.token}`}>{workout.title}</a>, duration: {workout.duration}</li>)
                   }) 
                }
            </ul>
        </Layout>
    )
}

module.exports = Index