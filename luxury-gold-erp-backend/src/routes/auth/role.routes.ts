import { Router } from "express";

import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../../controllers/auth/role.controller";

const router = Router();

// Create Role
router.post("/", create);

// Get All Roles
router.get("/", getAll);

// Get Role By ID
router.get("/:id", getById);

// Update Role
router.put("/:id", update);

// Delete Role
router.delete("/:id", remove);

export default router;