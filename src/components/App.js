import logo from "../logo.svg";
import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>

        <h2>Starkers Team</h2>
        <h4>Push Alex</h4>
        <h4>Push Ivan Martínez.</h4>
        <h4>Push Bea</h4>
        <h4>Push Luis</h4>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
