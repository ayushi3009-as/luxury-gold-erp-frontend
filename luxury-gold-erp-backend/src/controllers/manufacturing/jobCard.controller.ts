import { Request, Response } from "express";

import {
  getAllJobCards,
  getJobCardById,
  createJobCard,
  updateJobCard,
  deleteJobCard,
} from "../../services/manufacturing/jobCard.service";

// ================================
// GET ALL JOB CARDS
// ================================
export const getAll = async (
  req: Request,
  res: Response
) => {
  try {
    const jobCards = await getAllJobCards();

    return res.status(200).json({
      success: true,
      data: jobCards,
    });

  } catch (error: any) {

    console.error("GET ALL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });

  }
};

// ================================
// GET JOB CARD BY ID
// ================================
export const getById = async (
  req: Request,
  res: Response
) => {

  try {

    const id = req.params.id as string;

    const jobCard = await getJobCardById(id);

    if (!jobCard) {
      return res.status(404).json({
        success: false,
        message: "Job card not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: jobCard,
    });

  } catch (error: any) {

    console.error("GET BY ID ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });

  }

};

// ================================
// CREATE JOB CARD
// ================================
export const create = async (
  req: Request,
  res: Response
) => {

  try {

    console.log("BODY:", req.body);   // 👈 ye line add karo

    const jobCard = await createJobCard(req.body);

    return res.status(201).json({
      success: true,
      data: jobCard,
    });

  } catch (error: any) {

    console.error("CREATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });

  }

};

// ================================
// UPDATE JOB CARD
// ================================
export const update = async (
  req: Request,
  res: Response
) => {

  try {

    const id = req.params.id as string;

    const jobCard = await updateJobCard(
      id,
      req.body
    );

    return res.status(200).json({
      success: true,
      data: jobCard,
    });

  } catch (error: any) {

    console.error("UPDATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });

  }

};

// ================================
// DELETE JOB CARD
// ================================
export const remove = async (
  req: Request,
  res: Response
) => {

  try {

    const id = req.params.id as string;

    await deleteJobCard(id);

    return res.status(200).json({
      success: true,
      message: "Job card deleted successfully",
    });

  } catch (error: any) {

    console.error("DELETE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });

  }

};