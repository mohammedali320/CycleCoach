const React = require('react')

function Index (props){
    const workouts = props.workouts
    return (
        <div>
            <h1>Index Page</h1>
            <a href={`/workouts/new?token=${props.token}`}>Create A New workout</a>
            <ul>
                {
                   workouts.map((workout) => {
                    return (<li>This is the <a href={`/workouts/${workout.id}?token=${props.token}`}>{workouts.title}</a>, duration {fruit.duration}</li>)
                   }) 
                }
            </ul>
        </div>
    )
}

module.exports = Index