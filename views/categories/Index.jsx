const React = require('react')
const Layout = require('../Layouts/Layout')

function Index(props) {
    const categories = props.categories || []
    const token = props.token;
    return (
        <Layout token={props.token}>
            <div className="form-box">
                <h2>categories Page</h2>
                <div id='schedule'>
                    <ul id='things'>
                        {
                            categories.map((category) => {
                                return (<li id='cat'>Category: <a id='thing' href={`/categories/${category.id}?token=${props.token}`}>{category.name}</a></li>)
                            })
                        }
                    </ul>
                    <a href={`/categories/new?token=${props.token}`}> <button className="Newcat">Create A New category</button></a>
                </div>
            </div>
        </Layout>
    )
}

module.exports = Index