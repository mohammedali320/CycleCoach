const React = require('react');

function Layout(props) {
    const token = props.token;
    return (
        <html>
            <head>
                <title>CycleCoach</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <div className="container">
                    <h1>CycleCoach</h1>
                    <nav>
                        <a id='nv' href={`/users/schedule?token=${props.token}`}>My Schedule</a>
                        <a id='nv' href={`/categories?token=${props.token}`}>Categories</a>
                        <a id='nv' href={`/workouts?token=${props.token}`}>Added workouts</a>
                        <a id='nv' href={`/workouts/new?token=${props.token}`}>New workout</a>
                    </nav>
                </div>
                {props.children}
            </body>
        </html>
    );
}

module.exports = Layout;
