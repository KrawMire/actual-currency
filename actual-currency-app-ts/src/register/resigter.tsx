import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Response } from "../models/response";
import { useStores } from "../store/use-stores";

const Register = observer(() => {
    const { loginStore } = useStores();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onRegister() : void {
        if (email && email !== '' && password && password !== '') {
            if (password === confirmPassword) {
                fetch('http://localhost:5233/api/register', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({Email: email, Password: password})
                }).then(response => response.json())
                .then((response: Response) => {
                    if (response.success) {
                        loginStore.setUserId(response.data);
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                        alert('New user successfully added');
                    } else {
                        alert(`An error occured: ${response.error}`);
                    }
                });
            } else {
                alert('The passwords does not match');
            }
        } else {
            alert('The email or password is not specified');
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <div className="input-data">
                <p>Email:</p>
                <input value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-data">
                <p>Password:</p>
                <input value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="input-data">
                <p>Confirm password:</p>
                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button onClick={onRegister} >Register</button>
        </div>
    )
}) 

export default Register;