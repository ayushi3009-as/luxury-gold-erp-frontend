import { Request, Response } from "express";

import {
  getDashboardSummary,
  getJobCardStatus,
  getProductionStatus,
  getRecentJobCards,
  getRecentProductions,
  getRecentQualityChecks,
} from "../../services/manufacturing/dashboard.service";

// Dashboard Summary
export const summary = async (_req: Request, res: Response) => {
  try {
    const data = await getDashboardSummary();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Job Card Status
export const jobCardStatus = async (_req: Request, res: Response) => {
  try {
    const data = await getJobCardStatus();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Production Status
export const productionStatus = async (_req: Request, res: Response) => {
  try {
    const data = await getProductionStatus();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Recent Job Cards
export const recentJobCards = async (_req: Request, res: Response) => {
  try {
    const data = await getRecentJobCards();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Recent Production Orders
export const recentProductions = async (_req: Request, res: Response) => {
  try {
    const data = await getRecentProductions();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Recent Quality Checks
export const recentQualityChecks = async (_req: Request, res: Response) => {
  try {
    const data = await getRecentQualityChecks();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};