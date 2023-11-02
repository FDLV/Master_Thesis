/**
 * @swagger
 * components:
 *   schemas:
 *     Department:
 *       type: object
 *       required:
 *         - department_id
 *         - department_name
 *         - department_password
 *         - department_access
 *       properties:
 *         department_id:
 *           type: number
 *           description: Авто-генерирующийся id отдела
 *         department_name:
 *           type: string
 *           description: Название отдела
 *         department_password:
 *           type: string
 *           description: Пароль
 *         department_access:
 *           type: string
 *           description: Тип доступа
 *       example:
 *         department_id: 981
 *         department_name: Отдел продаж
 *         department_password: afb21ef276eafdb1b24bfafbfb165afddefb
 *         department_access: Admin
 */

import { jwtkey } from "../config/key.js";
import pool from "../config/db.js";

const Departments = {};

// GET DEPARTMENTS BY ID
Departments.get_by_id = (department_id) => {
  return pool.query("SELECT * from departments WHERE department_id = $1", [department_id]);
};

// GET DEPARTMENTS BY LOGIN
Departments.get_by_name = (department_name) => {
  return pool.query("SELECT * FROM departments WHERE department_name = $1", [department_name]);
};

export default Departments;
