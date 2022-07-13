import ApiToken from './api-token/api-token';
import './App.css';
import Login from './login/login';
import Register from './register/resigter';

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
