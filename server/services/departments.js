/**
 * @swagger
 * tags:
 *   name: Department
 *   description: Работа с заданиями пользователей
 * /departments:
 *   get:
 *     summary: Получить все отделы
 *     tags: [Department]
 *     parameters:
 *       - in: query
 *         name: department_id
 *         schema:
 *           type: int
 *         required: false
 *         description: Получить все отделы по department_id
 *       - in: query
 *         name: department_name
 *         schema:
 *           type: string
 *         required: false
 *         description: Получить все отделы по department_name
 *     responses:
 *       200:
 *         description: Request success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Department'
 *       500:
 *         description: Some server error
 */

import Departments from "../models/departments.js";

export const get_departments_service = async (query) => {
  // обработать кучу ошибок
  if (query.name === null || (query.name === "" && query.id === null) || query.id === "") return;

  let response;

  // тоже фигня, если два параметра передается
  if (query.id) response = await Departments.get_by_id(query.id);
  if (query.name) response = await Departments.get_by_name(query.name);

  return response;
};
