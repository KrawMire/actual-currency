import './App.css';
import ApiToken from './api-token/api-token';
import Login from './login/login';
import Register from './sign-up/register';
import { useState } from 'react';

function App() {
  const [storage, setStorage] = useState({});

  return (
    <div className="App">
      <ApiToken storage={storage} setStorage={(st) => setStorage(st)} />
      <Register storage={storage} setStorage={(st) => setStorage(st)} />
      <Login storage={storage} setStorage={(st) => setStorage(st)} />
    </div>
  );
}

export default App;
