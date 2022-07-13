import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStores } from "../store/use-stores";
import { Response } from "../models/response";

const ApiToken = observer(() => {
    const { loginStore } = useStores();
    const [apiToken, setApiToken] = useState('');

    // Prevent from requesting new token every render
    const [genOnce, setGetOnce] = useState(true);

    if (loginStore.userId !== '' && genOnce) {
        onGenerate();
    }

    function onGenerate() : void {
        fetch('http://localhost:5233/api/token')
            .then(response => response.json())
            .then((response : Response) => {
                if (response) {
                    if (response.success) {
                        setApiToken(response.data);
                        setGetOnce(false);
                    } else {
                        alert(`An error occured: ${response.error}`);
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
            <button onClick={onGenerate}>Generate</button>
        </div>
    )
})

export default ApiToken;