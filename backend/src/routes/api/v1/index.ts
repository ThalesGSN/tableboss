import express from "express";
import loginRouter from "./login";
import clienteRouter from "./cliente";
import reservaRouter from "./reserva";
import mesaRouter from "./mesa";

const v1Router = express.Router()

v1Router.use('/login', loginRouter);
v1Router.use('/cliente', clienteRouter)
v1Router.use('/reserva', reservaRouter)
v1Router.use('/mesa', mesaRouter)

export default v1Router;
