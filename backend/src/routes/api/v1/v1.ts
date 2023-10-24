import express from "express";
import loginRouter from "./login";
import clienteRouter from "./cliente";

const v1Router = express.Router()

v1Router.use('/login', loginRouter);
v1Router.use('/cliente', clienteRouter)

export default v1Router;
