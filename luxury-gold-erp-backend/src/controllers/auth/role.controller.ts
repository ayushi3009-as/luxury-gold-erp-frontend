import { Request, Response } from "express";

import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../../services/auth/role.service";

// ==========================
// Create Role
// ==========================
export const create = async (req: Request, res: Response) => {
  try {
    console.log("Request Body:", req.body);

    const role = await createRole(req.body);

    res.status(201).json({
      success: true,
      message: "Role created successfully",
      data: role,
    });
  } catch (error) {
    console.error("Create Role Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create role",
      error,
    });
  }
};

// ==========================
// Get All Roles
// ==========================
export const getAll = async (_req: Request, res: Response) => {
  try {
    const roles = await getAllRoles();

    res.status(200).json({
      success: true,
      data: roles,
    });
  } catch (error) {
    console.error("Get Roles Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch roles",
      error,
    });
  }
};

// ==========================
// Get Role By ID
// ==========================
export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const role = await getRoleById(id);

    if (!role) {
      return res.status(404).json({
        success: false,
        message: "Role not found",
      });
    }

    res.status(200).json({
      success: true,
      data: role,
    });
  } catch (error) {
    console.error("Get Role Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch role",
      error,
    });
  }
};

// ==========================
// Update Role
// ==========================
export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const role = await updateRole(id, req.body);

    res.status(200).json({
      success: true,
      message: "Role updated successfully",
      data: role,
    });
  } catch (error) {
    console.error("Update Role Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update role",
      error,
    });
  }
};

// ==========================
// Delete Role
// ==========================
export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    await deleteRole(id);

    res.status(200).json({
      success: true,
      message: "Role deleted successfully",
    });
  } catch (error) {
    console.error("Delete Role Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete role",
      error,
    });
  }
};