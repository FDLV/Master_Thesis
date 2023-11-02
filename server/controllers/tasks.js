import {
  get_tasks_service,
  create_task_service,
  update_task_service,
  delete_task_service,
} from "../services/tasks.js";

export const get_tasks = async (req, res) => {
  try {
    // FIX
    // Обработка ошибок
    const req_query = req.query;

    const response = await get_tasks_service(req_query);

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response === undefined) {
      res.status(400).json("ошибка в запросе");
      return;
    }

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response.rows.length === 0) res.status(404).json(null);
    else res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    // здесь тоже логи надо писать по идее, но хз архитектура сервиса уходит тогда
    res.status(500).send(err);
  }
};

export const create_task = async (req, res) => {
  try {
    // FIX
    // Обработка ошибок
    const req_query = req.query;

    const response = await create_task_service(req_query);

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response === undefined) {
      res.status(400).json("ошибка в запросе");
      return;
    }

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response.rows.length === 0) res.status(404).json(null);
    else res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    // здесь тоже логи надо писать по идее, но хз архитектура сервиса уходит тогда
    res.status(500).send(err);
  }
};

export const update_task = async (req, res) => {
  try {
    // FIX
    // Обработка ошибок
    const req_query = req.query;

    const response = await update_task_service(req_query);

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response === undefined) {
      res.status(400).json("ошибка в запросе");
      return;
    }

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response.rows.length === 0) res.status(404).json(null);
    else res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    // здесь тоже логи надо писать по идее, но хз архитектура сервиса уходит тогда
    res.status(500).send(err);
  }
};

export const delete_task = async (req, res) => {
  try {
    // FIX
    // Обработка ошибок
    const req_query = req.query;

    const response = await delete_task_service(req_query);

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response === undefined) {
      res.status(400).json("ошибка в запросе");
      return;
    }

    // База ошибок нужна по идее
    // Вместо null поставить объект ошибки
    if (response.rows.length === 0) res.status(404).json(null);
    else res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    // здесь тоже логи надо писать по идее, но хз архитектура сервиса уходит тогда
    res.status(500).send(err);
  }
};
