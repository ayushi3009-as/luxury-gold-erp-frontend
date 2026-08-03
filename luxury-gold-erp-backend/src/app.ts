import express from "express";
import cors from "cors";
import morgan from "morgan";

// =======================================
// Authentication Routes
// =======================================
import authRoutes from "./routes/auth/auth.routes";
import roleRoutes from "./routes/auth/role.routes";
import userRoutes from "./routes/auth/user.routes";

// =======================================
// Manufacturing Routes
// =======================================
import workerRoutes from "./routes/manufacturing/worker.routes";
import jobCardRoutes from "./routes/manufacturing/jobCard.routes";
import workerAssignmentRoutes from "./routes/manufacturing/workerAssignment.routes";
import productionOrderRoutes from "./routes/manufacturing/productionOrder.routes";
import qualityCheckRoutes from "./routes/manufacturing/qualityCheck.routes";
import materialConsumptionRoutes from "./routes/manufacturing/materialConsumption.routes";
import dashboardRoutes from "./routes/manufacturing/dashboard.routes";

const app = express();

// =======================================
// Middlewares
// =======================================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));



// =======================================
// Health Check
// =======================================
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Luxury Gold ERP Backend is Running 🚀",
  });
});

// =======================================
// Authentication APIs
// =======================================
app.use("/api/auth", authRoutes);

app.use("/api/roles", roleRoutes);

app.use("/api/users", userRoutes);

// =======================================
// Manufacturing APIs
// =======================================
app.use("/api/workers", workerRoutes);

app.use("/api/job-cards", jobCardRoutes);

app.use("/api/worker-assignments", workerAssignmentRoutes);

app.use("/api/production-orders", productionOrderRoutes);

app.use("/api/quality-checks", qualityCheckRoutes);

app.use("/api/material-consumptions", materialConsumptionRoutes);


app.use("/api/dashboard", dashboardRoutes);

// =======================================
// 404 Route
// =======================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// =======================================
// Global Error Handler
// =======================================
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(err);

    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
);

export default app;