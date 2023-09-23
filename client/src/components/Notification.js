import React, { useEffect, useState } from "react";
import close_icon from "../img/cross.svg";
import "../styles/notification.css";

const Notification = (props) => {
  const { title, text, mode, isShow, close } = props;

  const [notificationColor, setNotificationColor] = useState(null);

  const notification_types = [
    { mode: 'success', class: 'notification_success-color' },
    { mode: 'error', class: 'notification_error-color' },
    { mode: 'info', class: 'notification_info-color' },
  ]

  useEffect(() => {
    const current_mode = notification_types.find(el => el.mode === mode)
    if (current_mode === undefined) setNotificationColor("notification_info-color");
    else setNotificationColor(current_mode.class)
  }, [mode]);

  if (isShow === true) {
    return (
      <div className={`notification ${notificationColor}`}>
        <div className="notification__title-wrapper">
          <div className="notification__title">{title}</div>
          <button className="notification__btn" onClick={() => close()}>
            <img src={close_icon} />
          </button>
        </div>
        <div className="notification__text">{text}</div>
      </div>
    );
  }
};

export default Notification;
