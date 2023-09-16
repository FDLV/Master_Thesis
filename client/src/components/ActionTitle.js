import { useState, useEffect } from "react";
import create_icon from "../img/create.svg";
import edit_icon from "../img/edit.svg";
import delete_icon from "../img/delete.svg";
import "../styles/actiontitle.css";

const ActionTitle = (props) => {
  const { title, buttons } = props;

  const icons_list = [
    { action: "create", icon: create_icon },
    { action: "edit", icon: edit_icon },
    { action: "delete", icon: delete_icon },
  ];

  return (
    <div className="action-title__wrapper">
      <span className="action-title__text">{title}</span>
      <div className="action-title__btns">
        {buttons.map((el, el_key) => {
          const found_icon = icons_list.find((icon) => icon.action === el.type);
          return (
            <button key={el_key} className="action-title__btn" title={el.tooltip}>
              <img src={found_icon.icon} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ActionTitle;
