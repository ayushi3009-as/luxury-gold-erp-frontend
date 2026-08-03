import { Request, Response } from "express";
import * as productionService from "../../services/manufacturing/productionOrder.service";

// ==========================================
// CREATE PRODUCTION ORDER
// ==========================================
export const create = async (req: Request, res: Response) => {
  try {
    console.log("=====================================");
    console.log("BODY:", req.body);
    console.log("=====================================");

    const productionOrder =
      await productionService.createProductionOrder(req.body);

    return res.status(201).json({
      success: true,
      message: "Production Order created successfully",
      data: productionOrder,
    });
  } catch (error: any) {
    console.error("CREATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// GET ALL
// ==========================================
export const getAll = async (_req: Request, res: Response) => {
  try {
    const productionOrders =
      await productionService.getAllProductionOrders();

    return res.status(200).json({
      success: true,
      data: productionOrders,
    });
  } catch (error: any) {
    console.error("GET ALL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// GET BY ID
// ==========================================
export const getById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

const productionOrder =
  await productionService.getProductionOrderById(id);

    if (!productionOrder) {
      return res.status(404).json({
        success: false,
        message: "Production Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: productionOrder,
    });
  } catch (error: any) {
    console.error("GET BY ID ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// UPDATE
// ==========================================
export const update = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

const productionOrder =
  await productionService.updateProductionOrder(
    id,
    req.body
  );

    return res.status(200).json({
      success: true,
      message: "Production Order updated successfully",
      data: productionOrder,
    });
  } catch (error: any) {
    console.error("UPDATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// DELETE
// ==========================================
export const remove = async (req: Request, res: Response) => {
  try {

    const id = String(req.params.id);

    await productionService.deleteProductionOrder(id);

    return res.status(200).json({
      success: true,
      message: "Production Order deleted successfully",
    });

  } catch (error: any) {

    console.error("DELETE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};