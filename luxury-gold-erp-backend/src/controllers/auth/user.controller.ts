import { Request, Response } from "express";

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../../services/auth/user.service";

// ==========================
// Create User
// ==========================
export const create = async (req: Request, res: Response) => {
  try {
    console.log("Request Body:", req.body);

    const user = await createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    console.error("Create User Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to create user",
    });
  }
};

// ==========================
// Get All Users
// ==========================
export const getAll = async (_req: Request, res: Response) => {
  try {
    const users = await getAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error: any) {
    console.error("Get Users Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch users",
    });
  }
};

// ==========================
// Get User By ID
// ==========================
export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    console.error("Get User Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch user",
    });
  }
};

// ==========================
// Update User
// ==========================
export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const user = await updateUser(id, req.body);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error: any) {
    console.error("Update User Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update user",
    });
  }
};

// ==========================
// Delete User
// ==========================
export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    await deleteUser(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error: any) {
    console.error("Delete User Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete user",
    });
  }
};