import { Router } from "express";
import { get_tasks, create_task, update_task, delete_task } from "../controllers/tasks.js";

const router = Router();

router.get("/", get_tasks);
router.post("/", create_task);
router.put("/", update_task);
router.delete("/", delete_task);

export default router;
