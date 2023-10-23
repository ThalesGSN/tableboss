import express from "express";
import loginRouter from "./login";

const v1Router = express.Router()

v1Router.use('/login', loginRouter);

export default v1Router;
