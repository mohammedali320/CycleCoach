const React = require('react')

function Index (props){
    const workouts = props.workouts
    return (
        <div>
            <h1>Index Page</h1>
            <a href={`/workouts/new?token=${props.token}`}>Create A New workout</a>
            <div></div>
            <a href={`/categories?token=${props.token}`}>Go back to Categories</a>
            <ul>
                {
                   workouts.map((workout) => {
                    return (<li>workout: <a href={`/workouts/${workout.id}?token=${props.token}`}>{workout.title}</a>, duration: {workout.duration}</li>)
                   }) 
                }
            </ul>
        </div>
    )
}

module.exports = Index