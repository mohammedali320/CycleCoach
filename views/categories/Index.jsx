const React = require('react')
const Layout= require('../Layouts/Layout')

function Index (props){
    const categories = props.categories || []
      const token = props.token;
    return (
        <Layout token={props.token}>
            <h>categories Page</h>
            <div></div>
            <a href={`/categories/new?token=${props.token}`}>Create A New category</a>

            <ul>
                {
                   categories.map((category) => {
                    return (<li>Category: <a href={`/categories/${category.id}?token=${props.token}`}>{category.name}</a></li>)
                   }) 
                }
            </ul>
        </Layout>
    )
}

module.exports = Index