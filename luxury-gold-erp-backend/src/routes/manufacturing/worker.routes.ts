import { Router } from "express";

import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../../controllers/manufacturing/worker.controller";

import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";

const router = Router();

// Create Worker
router.post(
  "/",
  authenticate,
  authorize("Admin", "Manufacturing Manager"),
  create
);

// Get All Workers
router.get(
  "/",
  authenticate,
  authorize("Admin", "Manufacturing Manager", "Worker"),
  getAll
);

// Get Worker By ID
router.get(
  "/:id",
  authenticate,
  authorize("Admin", "Manufacturing Manager", "Worker"),
  getById
);

// Update Worker
router.put(
  "/:id",
  authenticate,
  authorize("Admin", "Manufacturing Manager"),
  update
);

// Delete Worker
router.delete(
  "/:id",
  authenticate,
  authorize("Admin","Manufacturing Manager"),
  remove
);

export default router;