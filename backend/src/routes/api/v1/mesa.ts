// routes/api/v1/mesaRouter.ts

import express from "express";
import MesaRepository from "../../../repository/Mesa";

const mesaRouter = express.Router();

/**
 * @swagger
 * /api/v1/mesa:
 *   get:
 *     tags:
 *       - Mesa
 *     description: Retrieve all mesas
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved mesas
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Mesa'
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
 *   Mesa:
 *     type: object
 *     properties:
 *       idMesa:
 *         type: integer
 *       numeroDeLugares:
 *         type: integer
 */
mesaRouter.get('/', async (req, res) => {
    try {
        const mesas = await MesaRepository.getAllMesas();
        res.json({
            ok: true,
            data: mesas
        });
    } catch (e) {
        res.json({
            ok: false,
            error: e.message
        });
    }
});

export default mesaRouter;
