/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Работа с заданиями пользователей
 * /tasks:
 *   post:
 *     summary: Создать задание
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *   get:
 *     summary: Получить все задания
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *   put:
 *     summary: Обновить задание
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *   delete:
 *     summary: Удалить задание
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */

import Tasks from "../models/tasks.js";

export const get_tasks_service = async (query) => {
  const response = await Tasks.get();
  return response;
};

export const create_task_service = async (query) => {
  const response = await Tasks.create();
  return response;
};

export const update_task_service = async (query) => {
  const response = await Tasks.put();
  return response;
};

export const delete_task_service = async (query) => {
  const response = await Tasks.delete();
  return response;
};
