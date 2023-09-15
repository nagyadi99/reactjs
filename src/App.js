import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my first React page.</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-nagy-7839001b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Profile
        </a>
      </header>
    </div>
  );
}

export default App;
