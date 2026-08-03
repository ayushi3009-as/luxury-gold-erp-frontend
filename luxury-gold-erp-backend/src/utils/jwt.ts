import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "LuxuryGoldERP@2026";

export interface JwtPayload {
  id: string;
  roleId: string;
  role: string;
}

export const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
};