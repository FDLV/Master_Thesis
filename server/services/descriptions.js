/**
 * @swagger
 * tags:
 *   name: Description
 *   description: Работа с заданиями пользователей
 * /descriptions:
 *   post:
 *     summary: Создать описание задания
 *     tags: [Description]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Description'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Description'
 *       500:
 *         description: Some server error
 *   get:
 *     summary: Получить все описания заданий
 *     tags: [Description]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Description'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Description'
 *       500:
 *         description: Some server error
 *   put:
 *     summary: Обновить описание задания
 *     tags: [Description]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Description'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Description'
 *       500:
 *         description: Some server error
 *   delete:
 *     summary: Удалить описание задания
 *     tags: [Description]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Description'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Description'
 *       500:
 *         description: Some server error
 */
