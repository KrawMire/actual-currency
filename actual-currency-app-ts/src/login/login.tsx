import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStores } from "../store/use-stores";
import { Response } from "../models/response";

const Login =  observer(() => {
    const { loginStore } = useStores();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let isLoggedIn = loginStore.userId != null;

    function onLogIn() {
        if (email && email !== '' && password && password !== '') {
            fetch('http://localhost:5233/api/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({email, password})
            }).then(response => response.json())
            .then((response : Response) => {
                if (response.success) {
                    loginStore.userId = response.data;

                    setEmail('');
                    setPassword('');
                } else {
                    alert(`An error occured: ${response.error}`);
                }
            });
        }
    }

    function onLogOut() {
        loginStore.setUserId('');
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
})

export default Login;