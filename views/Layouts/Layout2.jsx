const React = require('react');

function Layout2(props) {
    return (
        <html>
            <head>
                <title>CycleCoach</title>
                <link rel="stylesheet" href="/styles2.css" />
            </head>
            <body>
                {props.children}
            </body>
        </html>
    );
}

module.exports = Layout2;
