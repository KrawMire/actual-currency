import { useState } from "react";

function ApiToken() {
    const [apiToken, setApiToken] = useState('test-api-token');

    function onClickGenerate(e) {
        let token = '';
        setApiToken(token);
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