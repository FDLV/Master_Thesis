import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table.js";
import ActionTitle from "../components/ActionTitle.js";
import "../styles/auth.css";
import { notify } from "../store/notificationSlice.js";

const Tasks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const titles = [
    { id: 0, name: "заголовок 1" },
    { id: 1, name: "заголовок 2" },
    { id: 2, name: "заголовок 3" },
  ];

  const data = [
    { id: 993, values: ["q", "ddd", "fgh"], redirect_to: "description" },
    { id: 122323, values: ["gfh", "asdd", "nfgh"], redirect_to: "description" },
    { id: 1533, values: ["fq", "aaddd", "lfgh"], redirect_to: "description" },
    { id: 1534453, values: ["fq", "nddd", "afgh"], redirect_to: "description" },
  ];

  const buttons_data = [
    { id: 0, tooltip: "Создать", type: "create", action: "" },
    { id: 1, tooltip: "Редактировать", type: "edit", action: "" },
    { id: 2, tooltip: "Удалить", type: "delete", action: "" },
  ];

  const navigate_from_row = (redirect_to, row_id) => navigate(`/${redirect_to}/${row_id}`);

  useEffect(() => {
    // проверка токена
    if (token !== null) navigate("/tasks");
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            notify({ title: "Задание создано", text: "Задание успешно создано", mode: "success" })
          )
        }
      >
        зеленый
      </button>
      <button
        onClick={() =>
          dispatch(
            notify({
              title: "Задание не создано",
              text: "Не удалось создать задание",
              mode: "error",
            })
          )
        }
      >
        красный
      </button>
      <ActionTitle title="Задания" buttons={buttons_data} />
      <Table titles={titles} mode="read" data={data} navigate_from_row={navigate_from_row} />
    </div>
  );
};

export default Tasks;
