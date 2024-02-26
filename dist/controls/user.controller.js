"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserHandler = exports.deleteUserById = exports.getUserById = exports.addUser = exports.getUsers = void 0;
const users_service_1 = require("../services/users.service");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_service_1.showUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "the collection of users is empty", error: error });
    }
});
exports.getUsers = getUsers;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_service_1.createUser)(req.body);
        res.status(200).json({ message: "User added successfully", user });
    }
    catch (error) {
        res.status(500).json({ message: "User not found", error: error });
    }
});
exports.addUser = addUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_service_1.findUser)(req.params.id);
        if (user) {
            res.status(200).json({ message: "User found successfully", user });
        }
        else {
            throw new Error("user not found");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(500).json({ message: "Server error" });
    }
});
exports.getUserById = getUserById;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_service_1.deleteUser)(req.params.id);
        if (user) {
            res.status(200).json({ message: "User found successfully", user });
        }
        else {
            throw new Error("user not found");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(500).json({ message: "Server error" });
    }
});
exports.deleteUserById = deleteUserById;
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, users_service_1.updateUser)(req.params.id, req.body);
    try {
        res.status(200).json({ message: "User found successfully", newUser });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
    ;
});
exports.updateUserHandler = updateUserHandler;
