import express from "express";
import FuncionarioRrepository from "../../../repository/Funcionario";


const loginRouter = express.Router();

/**
 * @swagger
 *
 * /api/v1/login:
 *     post:
 *       tags:
 *         - Authentication
 *       summary: User login
 *       description: Authenticate user by username and password.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - username
 *                 - password
 *               properties:
 *                 username:
 *                   type: string
 *                   description: User's unique username.
 *                 password:
 *                   type: string
 *                   description: User's password.
 *               example:
 *                 username: john_doe
 *                 password: superSecret123
 *       responses:
 *         '200':
 *           description: Successfully authenticated.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                   ok:
 *                     type: boolean
 *               example:
 *                 username: john_doe
 *                 ok: true
 *         '500':
 *           description: Failed to authenticate due to a server error.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                   ok:
 *                     type: boolean
 *               example:
 *                 error: "Failed to fetch users from Slack"
 *                 ok: false
 */
loginRouter.post('/', async function (req, res) {
    try {
        const {username, password} = req.body; // Replace with the ID of the Slack channel you want to fetch users from

        const funcionarioExists = await FuncionarioRrepository.funcionarioExists(username);
        if (!funcionarioExists) {
            res.status(404).json({error: 'User not found', ok: false});
            return;
        }

        const funcionario = await FuncionarioRrepository.login(username, password);
        if (!funcionario) {
            res.status(401).json({error: 'Invalid password', ok: false});
            return;
        }

        res.json({data: funcionario, ok: true});
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch user', ok: false});
    }
})


export default loginRouter;
