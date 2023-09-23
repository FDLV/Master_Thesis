import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { remove_token } from "../store/tokenSlice.js";

import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    // проверить токен
    // забрать имя
  }, []);

  // имя пользователя добавить

  const click_exit = () => {
    dispatch(remove_token());

    if (window.location.pathname === "/" || window.location.pathname === "/help") return;

    navigate("/auth");
  };

  if (token === null) {
    return (
      <div className="header">
        <input className="header__input" name="chckbx" id="chckbxAuth" type="checkbox" />
        <label className="header__label" htmlFor="chckbxAuth"></label>
        <ul className="header-list">
          <li className="header__item">
            <Link className="header__item-link" to={"/"}>
              Главная
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__item-link" to={"/auth"}>
              Задания
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__item-link" to={"/help"}>
              Помощь
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="header">
        <input className="header__input" name="chckbx" id="chckbxAuth" type="checkbox" />
        <label className="header__label" htmlFor="chckbxAuth"></label>
        <ul className="header-list">
          <li className="header__item">
            <Link className="header__item-link" to={"/"}>
              Главная
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__item-link" to={"/tasks"}>
              Задания
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__item-link" to={"/help"}>
              Помощь
            </Link>
          </li>
          <li className="header__item">
            <button className="header__item-btn" onClick={() => click_exit()}>
              Выход
            </button>
          </li>
        </ul>
        <span className="header__user-name">Имя пользователя</span>
      </div>
    );
  }
};

export default Header;
