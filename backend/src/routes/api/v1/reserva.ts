import express from "express";
import {format} from 'date-fns';
import Reserva from "tableboss-shared/dist/Reserva";
import ReservaRepository from "../../../repository/Reserva/ReservaRepository"; // Assuming you have a similar structure for Reserva

const reservaRouter = express.Router()

/**
 * @swagger
 * /api/v1/reserva:
 *   post:
 *     tags:
 *       - Reserva
 *     description: Create a new reserva
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: reserva
 *         description: Reserva object without idReserva
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - idMesa
 *             - idCliente
 *             - data
 *             - numeroDePessoas
 *           properties:
 *             idMesa:
 *               type: integer
 *             idCliente:
 *               type: integer
 *             data:
 *               type: string
 *               format: date-time
 *             numeroDePessoas:
 *               type: integer
 *             observacoes:
 *               type: string
 *     responses:
 *       201:
 *         description: Successfully created reserva
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             data:
 *               $ref: '#/definitions/Reserva'
 *       400:
 *         description: Bad request
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             error:
 *               type: string
 *       default:
 *         description: Unexpected error
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             error:
 *               type: string
 *
 * definitions:
 *   Reserva:
 *     type: object
 *     properties:
 *       idReserva:
 *         type: integer
 *       idMesa:
 *         type: integer
 *       idCliente:
 *         type: integer
 *       data:
 *         type: string
 *         format: date-time
 *       numeroDePessoas:
 *         type: integer
 *       observacoes:
 *         type: string
 */
reservaRouter.post('/', async (req, res) => {
    try {
        const reserva = req.body as Omit<Reserva, 'idReserva'>
        const createdReserva = await ReservaRepository.createReserva(reserva)
        res.status(201).json({
            ok: true,
            data: createdReserva
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            error: e.message
        })
    }
})

/**
 * @swagger
 * /api/v1/reserva:
 *   get:
 *     tags:
 *       - Reserva
 *     description: Retrieve a list of reservas for a given date or for the current date if no date is provided.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: date
 *         description: Date to filter reservas
 *         in: query
 *         required: false
 *         type: string
 *         format: date
 *     responses:
 *       200:
 *         description: Successfully retrieved reservas
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Reserva'
 *       default:
 *         description: Unexpected error
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             error:
 *               type: string
 */
reservaRouter.get('/', async (req, res) => {
    try {
        let date = req.query.date as string;
        if (!date) {
            date = format(new Date(), 'yyyy-MM-dd');
        }
        const reservas = await ReservaRepository.getReservasByDate(date);
        res.json({
            ok: true,
            data: reservas
        })
    } catch (e) {
        res.json({
            ok: false,
            error: e.message
        })
    }
})

export default reservaRouter;
