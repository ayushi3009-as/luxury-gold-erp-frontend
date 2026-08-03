import { Router } from "express";

import {
  summary,
  jobCardStatus,
  productionStatus,
  recentJobCards,
  recentProductions,
  recentQualityChecks,
} from "../../controllers/manufacturing/dashboard.controller";

const router = Router();

router.get("/summary", summary);

router.get("/job-card-status", jobCardStatus);

router.get("/production-status", productionStatus);

router.get("/recent-job-cards", recentJobCards);

router.get("/recent-productions", recentProductions);

router.get("/recent-quality-checks", recentQualityChecks);

export default router;