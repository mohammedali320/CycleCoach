const React = require('react')
const Layout2= require('../Layouts/Layout2')

function SignUp (props) {
    return(
        <Layout2>
            <div className="form-container">
              <div className="form-box">
               <h1>CycleCoach</h1>
               <h2>Sign Up</h2>
               <form action="/users" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="Enter your full name..."
                        required 
                    />
                </div>
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
                <div className="divSignUp">
                        <button type="submit" className="signUp">
                            Sign Up
                        </button>
                    </div>  
               </form>
              </div>
            </div>
        </Layout2>
    )
}

module.exports = SignUp