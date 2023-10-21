import express from "express";

const roundRouter = express.Router();

/**
 * @swagger
 *
 * /round:
 *   post:
 *     produces:
 *       - application/text
 *     responses:
 *          201:
 *            description: OK
 *          500:
 *            description: Failed to create new round
 */
roundRouter.post('/', async function (req, res) {
    try {

        res.status(201).send('OK');
    } catch (error) {
        console.error('Error fetching users from Slack:', error.message);
        res.status(500).json({error: 'Failed to create new round'});
    }
})

export default roundRouter;
