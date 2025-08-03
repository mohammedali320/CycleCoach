const React = require('react')

function SignIn (props) {
    return(
        <div>
            <h1>Log In to CycleCoach</h1>
            <form action="/users/login" method="POST">
                Email: <input type="email" name="email" /><br/>
                Password: <input type="password" name="password" /><br/>
                <input type="submit" value="Submit to Login" />
            </form>
        </div>
    )
}

module.exports = SignIn