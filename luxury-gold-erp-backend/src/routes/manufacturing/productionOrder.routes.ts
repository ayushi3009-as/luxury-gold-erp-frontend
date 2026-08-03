import { Router } from "express";

import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../../controllers/manufacturing/productionOrder.controller";

import { authenticate } from "../../middleware/auth.middleware";

const router = Router();

// Create Production Order
router.post("/", authenticate, create);

// Get All Production Orders
router.get("/", authenticate, getAll);

// Get Production Order By ID
router.get("/:id", authenticate, getById);

// Update Production Order
router.put("/:id", authenticate, update);

// Delete Production Order
router.delete("/:id", authenticate, remove);

export default router;