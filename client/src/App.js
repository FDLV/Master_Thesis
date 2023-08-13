import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { set_token, remove_token } from "./store/tokenSlice.js";
import Table from "./components/Table.js";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/StartPage";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const titles = [
    { id: 0, name: "заголовок 1" },
    { id: 1, name: "заголовок 2" },
    { id: 2, name: "заголовок 3" },
  ];

  const data = [
    { id: 0, values: ["q", "ddd", "fgh"] },
    { id: 1, values: ["gfh", "asdd", "nfgh"] },
    { id: 2, values: ["fq", "aaddd", "lfgh"] },
    { id: 3, values: ["fq", "nddd", "afgh"] },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>

      {/* DO NOT DELETE!!! */}
      {/* <button
        onClick={() => {
          dispatch(set_token());
        }}
      >
        set
      </button>
      <Table titles={titles} mode="delete" data={data} />

      <button
        onClick={() => {
          dispatch(remove_token());
        }}
      >
        remove
      </button> */}

      {/* FOR DELETE */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
