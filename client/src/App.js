// import { useDispatch, useSelector } from "react-redux";
// import { set_token, remove_token } from "./store/tokenSlice.js";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Start from "./pages/StartPage";
import Help from "./pages/HelpPage";
import Auth from "./pages/AuthPage";
import Tasks from "./pages/TasksPage";
import Description from "./pages/DescriptionPage";

function App() {
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/help" element={<Help />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
      {/* DO NOT DELETE!!! */}
      {/* <button
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
      </button> */}
    </div>
  );
}

export default App;
