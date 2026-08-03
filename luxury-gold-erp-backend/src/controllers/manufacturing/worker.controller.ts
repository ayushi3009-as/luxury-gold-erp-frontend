import { Request, Response } from "express";

import {
  createWorker,
  getAllWorkers,
  getWorkerById,
  updateWorker,
  deleteWorker,
} from "../../services/manufacturing/worker.service";

// ==========================
// Create Worker
// ==========================
export const create = async (req: Request, res: Response) => {
  try {
    console.log("Request Body:", req.body);

    const worker = await createWorker(req.body);

    res.status(201).json({
      success: true,
      message: "Worker created successfully",
      data: worker,
    });
  } catch (error: any) {
    console.error("Create Worker Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to create worker",
    });
  }
};

// ==========================
// Get All Workers
// ==========================
export const getAll = async (_req: Request, res: Response) => {
  try {
    const workers = await getAllWorkers();

    res.status(200).json({
      success: true,
      data: workers,
    });
  } catch (error: any) {
    console.error("Get Workers Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch workers",
    });
  }
};

// ==========================
// Get Worker By ID
// ==========================
export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const worker = await getWorkerById(id);

    if (!worker) {
      return res.status(404).json({
        success: false,
        message: "Worker not found",
      });
    }

    res.status(200).json({
      success: true,
      data: worker,
    });
  } catch (error: any) {
    console.error("Get Worker Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch worker",
    });
  }
};

// ==========================
// Update Worker
// ==========================
export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const worker = await updateWorker(id, req.body);

    res.status(200).json({
      success: true,
      message: "Worker updated successfully",
      data: worker,
    });
  } catch (error: any) {
    console.error("Update Worker Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update worker",
    });
  }
};

// ==========================
// Delete Worker
// ==========================
export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    await deleteWorker(id);

    res.status(200).json({
      success: true,
      message: "Worker deleted successfully",
    });
  } catch (error: any) {
    console.error("Delete Worker Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete worker",
    });
  }
};