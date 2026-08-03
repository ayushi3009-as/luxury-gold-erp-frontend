import { Router } from "express";

import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../../controllers/manufacturing/jobCard.controller";

import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";

const router = Router();

// Create Job Card
router.post(
  "/",
  authenticate,
  authorize("Admin", "Manufacturing Manager"),
  create
);

// Get All Job Cards
router.get(
  "/",
  authenticate,
  authorize("Admin", "Manufacturing Manager", "Worker"),
  getAll
);

// Get Job Card By ID
router.get(
  "/:id",
  authenticate,
  authorize("Admin", "Manufacturing Manager", "Worker"),
  getById
);

// Update Job Card
router.put(
  "/:id",
  authenticate,
  authorize("Admin", "Manufacturing Manager"),
  update
);

// Delete Job Card
router.delete(
  "/:id",
  authenticate,
  authorize(
    "Admin",
    "Manufacturing Manager"
  ),
  remove
);
export default router;