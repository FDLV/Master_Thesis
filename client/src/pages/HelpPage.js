// исправить этот код

import React, { useState } from "react";
import "../styles/help.css";

const Help = () => {
  const [Answer1_Check, setAnswer1] = useState("none");
  const [Answer2_Check, setAnswer2] = useState("none");
  const [Answer3_Check, setAnswer3] = useState("none");
  const [Answer4_Check, setAnswer4] = useState("none");
  const [Answer5_Check, setAnswer5] = useState("none");
  const [Answer6_Check, setAnswer6] = useState("none");
  const [Answer7_Check, setAnswer7] = useState("none");
  const [Answer8_Check, setAnswer8] = useState("none");
  const [Answer9_Check, setAnswer9] = useState("none");

  function ChangeDisplay(num) {
    if (num === 1) {
      if (Answer1_Check === "block") {
        setAnswer1("none");
      } else {
        setAnswer1("block");
      }
    } else if (num === 2) {
      if (Answer2_Check === "block") {
        setAnswer2("none");
      } else {
        setAnswer2("block");
      }
    } else if (num === 3) {
      if (Answer3_Check === "block") {
        setAnswer3("none");
      } else {
        setAnswer3("block");
      }
    } else if (num === 4) {
      if (Answer4_Check === "block") {
        setAnswer4("none");
      } else {
        setAnswer4("block");
      }
    } else if (num === 5) {
      if (Answer5_Check === "block") {
        setAnswer5("none");
      } else {
        setAnswer5("block");
      }
    } else if (num === 6) {
      if (Answer6_Check === "block") {
        setAnswer6("none");
      } else {
        setAnswer6("block");
      }
    } else if (num === 7) {
      if (Answer7_Check === "block") {
        setAnswer7("none");
      } else {
        setAnswer7("block");
      }
    } else if (num === 8) {
      if (Answer8_Check === "block") {
        setAnswer8("none");
      } else {
        setAnswer8("block");
      }
    } else {
      if (Answer9_Check === "block") {
        setAnswer9("none");
      } else {
        setAnswer9("block");
      }
    }
  }

  return (
    <div className="main">
      <div className="PageTitleHelp">
        Вы находитесь на странице поддержки системы отчётности предприятий "Вита"
      </div>
      <div className="ContentHelp1">
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(1);
            }}
          >
            Для чего нужна ваша система?
          </div>
          <div style={{ display: Answer1_Check }}>
            <br></br>
            Наша система нацелена на упрощение процесса передачи отчётности между руководством и
            подчинёнными
          </div>
        </div>
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(2);
            }}
          >
            Какой функционал у вашей системы?
          </div>
          <div style={{ display: Answer2_Check }}>
            <br></br>
            Наша система позволяет руководству компании создавать задания для заполнения, а
            подчиненным заполнять созданные для них задания
          </div>
        </div>
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(3);
            }}
          >
            Как приступить к работе с порталом?
          </div>
          <div style={{ display: Answer3_Check }}>
            <br></br>
            Для начала работы необходимо нажать кнопку "Задания" в левом верхнем углу экрана. Далее,
            если вы не авторизованы в системе, вам будет нужно ввести логин и пароль от своей
            учётной записи
          </div>
        </div>
      </div>
      <div className="ContentHelp1">
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(4);
            }}
          >
            Кто может пользоваться данной системой?
          </div>
          <div style={{ display: Answer4_Check }}>
            <br></br>
            Пользоваться системой отчетности предприятий "Вита" могут только сотрудники предприятий
          </div>
        </div>
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(5);
            }}
          >
            Что делать, если я не знаю или не помню логин и/или пароль?
          </div>
          <div style={{ display: Answer5_Check }}>
            <br></br>В случае если вы не знаете или не помните учетные данные, вам необходимо
            обратиться к администратору системы на вашем предприятии
          </div>
        </div>
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(6);
            }}
          >
            Как получить консультацию специалиста?
          </div>
          <div style={{ display: Answer6_Check }}>
            <br></br>
            Для получения консультации специалиста обратитесь к администратору системы на вашем
            предприятии
          </div>
        </div>
      </div>
      <div className="ContentHelp1">
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(7);
            }}
          >
            Обладает ли данная система разграничением доступа?
          </div>
          <div style={{ display: Answer7_Check }}>
            <br></br>
            Да, в системе присутствуют пользователи двух типов: обычные пользоваиели и
            администраторы
          </div>
        </div>
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(8);
            }}
          >
            Как добавить пользователя в систему?
          </div>
          <div style={{ display: Answer8_Check }}>
            <br></br>
            Для добавления нового пользователя необходимо обратиться к администратору системы на
            вашем предприятии
          </div>
        </div>
        <div className="TextHelp1">
          <div
            className="Question"
            onClick={() => {
              ChangeDisplay(9);
            }}
          >
            Какие браузеры поддерживают работу в данной системе?
          </div>
          <div style={{ display: Answer9_Check }}>
            <br></br>
            Большинство популярных современных браузеров позволяют работать с нашей системой
          </div>
        </div>
      </div>
      <div className="ContentHelp2">
        <div className="TextHelp2">
          Если вы не нашли ответ на интересующие вас вопросы, то просим писать на почту
        </div>
      </div>
    </div>
  );
};

export default Help;
