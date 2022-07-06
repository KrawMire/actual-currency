import './App.css';
import ApiToken from './api-token/api-token';
import Login from './login/login';
import Register from './sign-up/register';

function App() {
  return (
    <div className="App">
      <ApiToken />
      <Register />
      <Login />
    </div>
  );
}

export default App;
