"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({ message: "Sever is online" });
});
app.use("/users", user_routes_1.router);
/*app.listen(PORT,() => {
    console.log ("Server is online on port 3000");
});*/
exports.default = app;
