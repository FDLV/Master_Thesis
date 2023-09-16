import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth_user } from "../api/auth.js";
import "../styles/auth.css";

function Auth() {
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    // проверка токена
    if (token !== null) navigate("/tasks");
  }, []);

  return (
    <div>
      <div className="box">
        <div className="boxName">Авторизация</div>
        <div className="boxContent">
          <input
            id="login"
            className="boxInput"
            type="text"
            placeholder="Логин"
            onKeyDown={(e) => (e.key === "Enter" ? auth_user() : null)}
          ></input>
          <br></br>
          <input
            id="password"
            className="boxInput"
            type="password"
            placeholder="Пароль"
            onKeyDown={(e) => (e.key === "Enter" ? auth_user() : null)}
          ></input>
          <br></br>
          <button onClick={() => auth_user()} className="boxButton">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
