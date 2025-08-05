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
                <header>
                    <h1>CycleCoach</h1>
                    <nav>
                        <a href={`/users/schedule?token=${props.token}`}>My Schedule</a>
                        <a href={`/categories?token=${props.token}`}>Categories</a>
                        <a href={`/workouts?token=${props.token}`}>Added workouts</a>
                        <a href={`/workouts/new?token=${props.token}`}>New workout</a>
                    </nav>
                </header>
                {props.children}
            </body>
        </html>
    );
}

module.exports = Layout;
