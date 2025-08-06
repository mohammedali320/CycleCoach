const React = require('react');
const Layout2= require('../Layouts/Layout2')

function SignIn(props) {
    return (
        <Layout2>
        <div className="form-container">
            <div className="form-box">
                <h1>CycleCoach</h1>
                <h2>Sign In</h2>
                <form action="/users/login" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your Password..."
                            required
                        />
                    </div>
                    <div className="divSignIn">
                        <button type="submit" className="signIn">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </Layout2>
    );
}

module.exports = SignIn;
