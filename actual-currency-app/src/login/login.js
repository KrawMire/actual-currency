import { useState } from "react";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let isLoggedIn = props.storage.userId != null;

    function onLogIn(e) {
        if (email && email !== '' && password && password !== '') {
            fetch('http://localhost:5233/api/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({email, password})
            })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    props.setStorage({userId: response.data});

                    // Clear the email and password fields
                    setEmail('');
                    setPassword('');
                } else {
                    console.log("An error occured: " + response.error);
                }
            });
        } else {
            alert('Email or password is not specified');
        }
    }

    function onLogOut() {
        props.setStorage({userId: null});
    }

    return (
        <div>
            <h1>Log In</h1>
            <div className="input-data">
                <p>Email:</p>
                <input value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-data">
                <p>Password:</p>
                <input value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="login-button-group">
                <button onClick={onLogIn} disabled={isLoggedIn}>Log In</button>
                <button onClick={onLogOut} disabled={!isLoggedIn}>Log Out</button> 
            </div>
        </div>
    )
}

export default Login;