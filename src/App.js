import './App.css';

function App() {
  return (
    <div className= "App">
      <h1>Login</h1>
      <div className="Ice">
      <p>Username</p>
      <input className='btn'></input>
      </div>
      <div className="Ice">
      <p>Password</p>
      <input type="password" className='btn'></input>
      </div>
      <div className="Button">
      <button>
        Login
      </button>
      </div>
    </div>
  );
}

export default App;
