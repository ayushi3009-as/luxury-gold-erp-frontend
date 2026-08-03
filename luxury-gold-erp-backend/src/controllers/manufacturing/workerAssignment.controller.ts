import { Request, Response } from "express";

import {
  createAssignment,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
} from "../../services/manufacturing/workerAssignment.service";

// ==========================
// Create Assignment
// ==========================
export const create = async (req: Request, res: Response) => {
  try {
    console.log("Request Body:", req.body);

    const assignment = await createAssignment(req.body);

    res.status(201).json({
      success: true,
      message: "Worker assigned successfully",
      data: assignment,
    });
  } catch (error: any) {
    console.error("Create Assignment Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to assign worker",
    });
  }
};

// ==========================
// Get All Assignments
// ==========================
export const getAll = async (_req: Request, res: Response) => {
  try {
    const assignments = await getAllAssignments();

    res.status(200).json({
      success: true,
      data: assignments,
    });
  } catch (error: any) {
    console.error("Get Assignments Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch assignments",
    });
  }
};

// ==========================
// Get Assignment By ID
// ==========================
export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const assignment = await getAssignmentById(id);

    if (!assignment) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: assignment,
    });
  } catch (error: any) {
    console.error("Get Assignment Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch assignment",
    });
  }
};

// ==========================
// Update Assignment
// ==========================
export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const assignment = await updateAssignment(id, req.body);

    res.status(200).json({
      success: true,
      message: "Assignment updated successfully",
      data: assignment,
    });
  } catch (error: any) {
    console.error("Update Assignment Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update assignment",
    });
  }
};

// ==========================
// Delete Assignment
// ==========================
export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    await deleteAssignment(id);

    res.status(200).json({
      success: true,
      message: "Assignment deleted successfully",
    });
  } catch (error: any) {
    console.error("Delete Assignment Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete assignment",
    });
  }
};