import { Router } from "express";
import { get_departments } from "../controllers/departments.js";

const router = Router();

router.get("/", get_departments);

export default router;
