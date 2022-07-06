function Login() {
    return (
        <div>
            <h1>Log In</h1>
            <div className="input-data">
                <p>Email:</p>
                <input />
            </div>
            <div className="input-data">
                <p>Password:</p>
                <input />
            </div>
            <div className="login-button-group">
                <button>Log In</button>
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default Login;