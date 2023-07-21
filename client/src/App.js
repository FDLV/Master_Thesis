import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { set_token, remove_token } from "./store/tokenSlice.js";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(set_token());
        }}
      >
        set
      </button>
      <button
        onClick={() => {
          dispatch(remove_token());
        }}
      >
        remove
      </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {token}
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
