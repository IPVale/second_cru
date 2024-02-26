"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const CONNECTION_URL = "mongodb://localhost:27017/complete_CRUD";
const PORT = 3000;
mongoose_1.default
    .connect(CONNECTION_URL)
    .then(() => {
    console.log("You're connected with MongoDB");
    app_1.default.listen(PORT, () => {
        console.log(`Server is online at http://localhost:${PORT}`);
    });
})
    .catch((error) => console.error(error));
