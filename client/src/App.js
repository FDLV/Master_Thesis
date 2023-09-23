import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Start from "./pages/StartPage";
import Help from "./pages/HelpPage";
import Auth from "./pages/AuthPage";
import Tasks from "./pages/TasksPage";
import Description from "./pages/DescriptionPage";
import { close } from "./store/notificationSlice.js";

function App() {
  const dispatch = useDispatch();

  const notification_title = useSelector((state) => state.notification.title);
  const notification_text = useSelector((state) => state.notification.text);
  const notification_mode = useSelector((state) => state.notification.mode);
  const notification_isShow = useSelector((state) => state.notification.isShow);

  const close_notification = () => dispatch(close());

  return (
    <div className="App">
      <Notification
        title={notification_title}
        text={notification_text}
        mode={notification_mode}
        isShow={notification_isShow}
        close={close_notification}
      />

      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/help" element={<Help />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
