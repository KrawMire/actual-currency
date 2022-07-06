import { useState } from "react";

function ApiToken() {
    const [apiToken, setApiToken] = useState('');

    function onClickGenerate(e) {
        fetch('http://localhost:5233/api/token')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response) {
                if (response.success) {
                    setApiToken(response.data);
                } else {
                    alert('An error occured');
                }
            }
        });
    }

    return (
        <div>
            <h1>API token</h1>
            <div className="input-data">
                <p>Token</p>
                <input value={apiToken} readOnly />
            </div>
            <button onClick={onClickGenerate}>Generate</button>
        </div>
    )
}

export default ApiToken;