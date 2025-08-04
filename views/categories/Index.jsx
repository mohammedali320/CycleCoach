const React = require('react')

function Index (props){
    const categories = props.categories || []
    return (
        <div>
            <h1>categories Page</h1>
            <a href={`/categories/new?token=${props.token}`}>Create A New category</a>
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