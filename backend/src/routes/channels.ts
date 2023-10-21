import express from "express";

const channelsRouter = express.Router();

/**
 * @swagger
 *
 * /channels/{channel}/users:
 *   get:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: channel
 *         in: path
 *         required: true
 *         type: string
 *         description: The ID of the Slack channel you want to fetch users from
 *     responses:
 *          200:
 *            description: OK
 */
channelsRouter.get('/:channel/users', async function (req, res) {
    try {
        const channelId = req.params.channel; // Replace with the ID of the Slack channel you want to fetch users from

        res.json({ channelId, ok: true });
    } catch (error) {
        console.error('Error fetching users from Slack:', error.message);
        res.status(500).json({error: 'Failed to fetch users from Slack', ok: false});
    }
})



export default channelsRouter;
