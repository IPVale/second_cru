import { Router } from "express";
import { addUser, deleteUserById, getUserById, getUsers, updateUserHandler } from "../controls/user.controller";

export const router = Router();

router.get("/", getUsers);
router.post("/", addUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.patch("/:id", updateUserHandler);