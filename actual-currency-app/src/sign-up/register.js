import { useState } from "react";

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onRegister(e) {
        if (email && email !== '' && password && password !== '') {
            if (password === confirmPassword) {
                fetch('http://localhost:5233/api/register', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({Email: email, Password: password})
                }).then(response => response.json())
                .then(response => {
                    if (response.success) {
                        props.setStorage({userId: response.data});
                        alert("New user successfully added");
                    } else {
                        console.log("An error occured: " + response.error);
                    }
                });
            } else {
                alert('The passwords does not match')
            }
        } else {
            alert('The email or password is not specified')
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
}

export default Register;