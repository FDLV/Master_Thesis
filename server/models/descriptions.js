/**
 * @swagger
 * components:
 *   schemas:
 *     Description:
 *       type: object
 *       required:
 *         - description_id
 *         - description_taskid
 *       properties:
 *         description_id:
 *           type: number
 *           description: Авто-генерирующийся id описания задания
 *         description_name:
 *           type: string
 *           description: Название описания задания
 *         description_value:
 *           type: string
 *           description: Значение описания задания
 *         description_taskid:
 *           type: number
 *           description: id задания, к которому привязано описание задания
 *       example:
 *         description_id: 234
 *         description_name: Средняя прибыль
 *         description_value: 12 тысяч
 *         description_taskid: 12
 */
import { jwtkey } from "../config/key";
import { pool } from "../config/db";

const Descriptions = {};

// GET DESCRIPTION
Descriptions.get = (task_id) => {
  return pool.query(
    "SELECT * from descriptions WHERE description_taskId = $1 ORDER BY description_id DESC",
    [task_id]
  );
};

// CREATE DESCRIPTION
Descriptions.create = (description_name, description_value, id) => {
  return pool.query(
    "INSERT INTO descriptions (description_name, description_value, description_taskId) VALUES($1, $2, $3) RETURNING *",
    [description_name, description_value, id]
  );
};

// FIX
// UPDATE DESCRIPTION
Descriptions.update = (title, content, articleID) => {
  return pool.query("UPDATE tasks SET task_departmentName = $1 WHERE task_id = $2", [
    task_departmentName,
    id,
  ]);
};

// DELETE DESCRIPTION
Descriptions.delete = (description_id) => {
  return pool.query("DELETE FROM descriptions WHERE description_id = $1", [description_id]);
};

export default Tasks;
