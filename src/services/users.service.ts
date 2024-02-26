import { User } from "../models/user.model";
import { IUser } from "../types/user.type";

export const showUsers= async (): Promise<IUser[]> => {
    return await User.find();
};

export const createUser= async (user:IUser): Promise<IUser> => {
    return await User.create(user);
}

export const findUser= async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
}

export const deleteUser= async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(id);
}

export const updateUser= async (id: string, user: Partial<IUser>): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(id, user, {new: true});
}