import express from "express";
import { router as userApi } from "./routes/user.routes";

const app = express ();
app.use(express.json());

const PORT= 3000;

app.get ("/",(req,res) => {
    res.json({message: "Sever is online"})
});

app.use("/users", userApi);

/*app.listen(PORT,() => {
    console.log ("Server is online on port 3000");
});*/

export default app;


