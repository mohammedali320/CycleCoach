const React = require('react')

function Index (props){
    const categories = props.categories || []
      const token = props.token;
    return (
        <div>
            <h1>categories Page</h1>
            <a href={`/categories/new?token=${props.token}`}>Create A New category</a>
            <div></div>
            <a href={`/users/schedule?token=${token}`}>My Schedule</a>

            <ul>
                {
                   categories.map((category) => {
                    return (<li>category: <a href={`/categories/${category.id}?token=${props.token}`}>{category.name}</a>, description: {category.description}</li>)
                   }) 
                }
            </ul>
        </div>
    )
}

module.exports = Index