"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserHandler = exports.deleteUserHandler = exports.addUserHandler = exports.getUserById = exports.getUsers = void 0;
const users_data_1 = require("../data/users.data");
const getUsers = (req, res) => {
    try {
        res.status(200).json(users_data_1.users);
    }
    catch (err) {
        res.status(400).json({ message: "Error" });
    }
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    try {
        const findUser = users_data_1.users.find(element => element.id === req.params.id);
        res.status(200).json(findUser);
    }
    catch (err) {
        res.status(400).json({ message: "Error" });
    }
};
exports.getUserById = getUserById;
/*export const addUserHandler = (req: Request, res: Response) => {
    try {
    const newUserBody: User = req.body;
    const newId = Date.now().toString();
    users.push({ ...newUserBody, id: newId });
    res.status(200).json({...newUserBody});
    } catch (err: any) {
    res.status(400).json({ message: "Error my friend" });
    }
};*/
const addUserHandler = (req, res) => {
    try {
        const newUserBody = req.body;
        const newId = Date.now().toString();
        users_data_1.users.push(Object.assign(Object.assign({}, newUserBody), { id: newId }));
        res.status(200).json({
            message: "you just added this user",
            user: users_data_1.users[users_data_1.users.length - 1],
        });
        //res.status(200).json({...newUserBody})
    }
    catch (err) {
        res.status(400).json({ message: "No user added" });
    }
};
exports.addUserHandler = addUserHandler;
const deleteUserHandler = (req, res) => {
    try {
        const user = users_data_1.users.findIndex((element) => element.id === req.params.id);
        if (user !== -1) {
            res.status(200).json(users_data_1.users[user]);
            users_data_1.users.splice(user, 1);
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "no user access" });
    }
};
exports.deleteUserHandler = deleteUserHandler;
/*export const updateUserHandler = (req: Request, res: Response) => {
        const indexUserFound= users.findIndex(element => element.id === req.params.id);
        if (indexUserFound !== -1){
        Object.assign(users[indexUserFound], req.body);
        res.status(200).json({message: "User successfully modified"});
        } else {
        res.status(400).json({message: "User not found"});
        }
    };*/
const updateUserHandler = (req, res) => {
    try {
        const userToUpdate = users_data_1.users.findIndex((element) => element.id === req.params.id);
        if (userToUpdate !== -1) {
            Object.assign(users_data_1.users[userToUpdate], req.body);
            res.status(200).json({ message: "user updated correctly" });
        }
        else {
            res.status(400).json({ message: "not today!" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "server not found" });
    }
};
exports.updateUserHandler = updateUserHandler;
