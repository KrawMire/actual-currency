import { useState } from "react";

function ApiToken(props) {
    const [apiToken, setApiToken] = useState('');

    // Prevent from requesting new token every render
    const [genOnce, setGenOnce] = useState(true);

    if (props.storage.userId && genOnce) {
        onClickGenerate();
    }

    function onClickGenerate(e) {
        fetch('http://localhost:5233/api/token')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response) {
                if (response.success) {
                    setApiToken(response.data);
                    setGenOnce(false);
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