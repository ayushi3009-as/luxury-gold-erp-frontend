import { Request, Response } from "express";
import {
  createMaterialConsumption,
  getAllMaterialConsumptions,
  getMaterialConsumptionById,
  updateMaterialConsumption,
  deleteMaterialConsumption,
} from "../../services/manufacturing/materialConsumption.service";

// Create
export const create = async (req: Request, res: Response) => {
  try {
    const result = await createMaterialConsumption(req.body);

    res.status(201).json({
      success: true,
      message: "Material Consumption created successfully",
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
    const result = await getAllMaterialConsumptions();

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

// Get By ID
export const getById = async (req: Request, res: Response) => {
  try {
    const result = await getMaterialConsumptionById(req.params.id as string);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Material Consumption not found",
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
    const result = await updateMaterialConsumption(
      req.params.id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Material Consumption updated successfully",
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
    await deleteMaterialConsumption(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Material Consumption deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};