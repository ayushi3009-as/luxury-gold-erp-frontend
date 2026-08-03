import { Router } from "express";

import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../../controllers/auth/user.controller";

const router = Router();

// Create User
router.post("/", create);

// Get All Users
router.get("/", getAll);

// Get User By ID
router.get("/:id", getById);

// Update User
router.put("/:id", update);

// Delete User
router.delete("/:id", remove);

export default router;