/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - task_id
 *         - task_departmentName
 *       properties:
 *         task_id:
 *           type: number
 *           description: Авто-генерирующийся id задания
 *         task_name:
 *           type: string
 *           description: Название задания
 *         task_status:
 *           type: string
 *           description: Статус задания
 *         task_dateBegin:
 *           type: string
 *           description: Дата создания задания
 *         task_dateComplete:
 *           type: string
 *           description: Дата выполнения задания
 *         task_dateEnd:
 *           type: string
 *           description: Дата завершения задания
 *         task_description:
 *           type: string
 *           description: Описание задания
 *         task_departmentName:
 *           type: string
 *           description: Название отдела или компании
 *       example:
 *         task_id: 234
 *         task_name: Ежемесячный отчет
 *         task_status: В процессе выполнения
 *         task_dateBegin:  2023-10-01
 *         task_dateComplete:  2023-10-01
 *         task_dateEnd: 2023-10-01
 *         task_description: Срочно сделать отчет
 *         task_departmentName: Отдел продаж
 */

import { jwtkey } from "../config/key.js";
import pool from "../config/db.js";

const Tasks = {};

// GET TASKS
Tasks.get = () => {
  return pool.query("SELECT * FROM tasks");
};

// CREATE TASK
Tasks.create = (
  task_name,
  task_status,
  task_dateBegin,
  task_dateComplete,
  task_dateEnd,
  task_description,
  task_departmentName
) => {
  return pool.query(
    "INSERT INTO tasks (task_name, task_status, task_dateBegin, task_dateComplete, task_dateEnd, task_description, task_departmentName) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      task_name,
      task_status,
      task_dateBegin,
      task_dateComplete,
      task_dateEnd,
      task_description,
      task_departmentName,
    ]
  );
};

// FIX
// UPDATE TASK
Tasks.update = (title, content, articleID) => {
  return pool.query("UPDATE tasks SET task_departmentName = $1 WHERE task_id = $2", [
    task_departmentName,
    id,
  ]);
};

// DELETE TASK
Tasks.delete = (task_id) => {
  return pool.query("DELETE FROM tasks WHERE task_id = $1", [task_id]);
};

export default Tasks;
