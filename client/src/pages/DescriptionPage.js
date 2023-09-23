import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table.js";
import ActionTitle from "../components/ActionTitle.js";
import "../styles/auth.css";

const Tasks = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  const titles = [
    { id: 0, name: "заголовок 1" },
    { id: 1, name: "заголовок 2" },
    { id: 2, name: "заголовок 3" },
  ];

  const titles_description = [
    { id: 0, name: "заголовок 1" },
    { id: 1, name: "заголовок 2" },
  ];

  const data = [{ id: 0, values: ["q", "ddd", "fgh"] }];

  const data_description = [
    { id: 0, values: ["q", "kljddd"] },
    { id: 1, values: ["weq", "dsddd"] },
    { id: 2, values: ["vbbn", "rewdwedd"] },
    { id: 3, values: ["sdfq", "wqeddd"] },
    { id: 4, values: ["dsdqf", "erdedd"] },
    { id: 5, values: ["qfsdf", "eddrthd"] },
    { id: 6, values: ["cvcxvq", "jhddd"] },
    { id: 7, values: ["wqeqweq", "vbvcddd"] },
    { id: 8, values: ["bvcq", "vcddd"] },
    { id: 9, values: ["sdq", "asddd"] },
  ];

  const buttons_data = [];

  const buttons_data_file = [{ id: 0, tooltip: "Удалить", type: "delete", action: "" }];

  const buttons_data_description = [
    { id: 0, tooltip: "Создать", type: "create", action: "" },
    { id: 1, tooltip: "Редактировать", type: "edit", action: "" },
    { id: 2, tooltip: "Удалить", type: "delete", action: "" },
  ];

  // useEffect(() => {
  //   // проверка токена
  //   if (token !== null) navigate("/tasks");
  // }, []);

  // c mode разобраться лишние выделения тут строк не нужны
  return (
    <div>
      <ActionTitle title="Выбранное задание" buttons={buttons_data} />
      <Table titles={titles} mode="read" data={data} />

      <ActionTitle title="Файлы" buttons={buttons_data_file} />

      <ActionTitle title="Описание задания" buttons={buttons_data_description} />
      <Table titles={titles_description} mode="read" data={data_description} />
    </div>
  );
};

export default Tasks;
