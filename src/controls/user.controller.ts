import { Request, Response } from "express";
import { createUser, deleteUser, findUser, showUsers, updateUser } from "../services/users.service";
import { IUser } from "../types/user.type";


export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await showUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message:"the collection of users is empty", error: error});
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = await createUser(req.body);
    res.status(200).json({ message: "User added successfully", user });
  } catch (error) {
    res.status(500).json({message:"User not found", error: error});
  }
};

export const getUserById = async (req: Request, res: Response) => { 
  try {
  const user = await findUser(req.params.id);
  if (user){
  res.status(200).json({ message: "User found successfully", user });
  } else {
    throw new Error("user not found");
  }
} catch (error) {
  if (error instanceof Error){
    res.status(404).json({message: "User not found"});
  }
  res.status(500).json({message:"Server error"});  
}
};

export const deleteUserById = async (req: Request, res: Response) => { 
  try {
  const user = await deleteUser(req.params.id);
  if (user){
    res.status(200).json({ message: "User found successfully", user });
    } else {
      throw new Error("user not found");
    }
  } catch (error) {
    if (error instanceof Error){
      res.status(404).json({message: "User not found"});
    }
    res.status(500).json({message:"Server error"});  
  }
  }; 

export const updateUserHandler = async (req: Request, res: Response) => { 
  const newUser = await updateUser(req.params.id, req.body); 
  try {
  res.status(200).json({ message: "User found successfully", newUser});
  } catch (error) {
  res.status(500).json({message:"Server error"});
};
}