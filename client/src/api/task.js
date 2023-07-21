import { config } from "../config/address";

// Получить все задания
export const get_tasks = async (body, query_params) => {
  const url = `http://${config.address}/tasks?${query_params}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      //   "Authorization": token,
    },
  };

  const response = await fetch(url, params);
  return response;
};

// Создать задание
export const create_task = async (body, query_params) => {
  const url = `http://${config.address}/tasks?${query_params}`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      //   "Authorization": token,
    },
    body: body,
  };

  const response = await fetch(url, params);
  return response;
};

// Обновить задание
export const update_task = () => {};
