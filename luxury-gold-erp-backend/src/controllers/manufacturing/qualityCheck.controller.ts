import { Request, Response } from "express";

import {
  createQualityCheck,
  getAllQualityChecks,
  getQualityCheckById,
  updateQualityCheck,
  deleteQualityCheck,
} from "../../services/manufacturing/qualityCheck.service";

// Create
export const create = async (req: Request, res: Response) => {
  try {
    const result = await createQualityCheck(req.body);

    res.status(201).json({
      success: true,
      message: "Quality Check created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All
export const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await getAllQualityChecks();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get By Id
export const getById = async (req: Request, res: Response) => {
  try {
    const result = await getQualityCheckById(req.params.id as string);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Quality Check not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update
export const update = async (req: Request, res: Response) => {
  try {
    const result = await updateQualityCheck(
      req.params.id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Quality Check updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete
export const remove = async (req: Request, res: Response) => {
  try {
    await deleteQualityCheck(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Quality Check deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};