import express from 'express'
import { Cliente } from '@tableboss/types'
import ClienteRepository from '../../../repository/Cliente'

const clienteRouter = express.Router()

/**
 * @swagger
 * /api/v1/cliente:
 *   post:
 *     tags:
 *       - Cliente
 *     description: Create a new cliente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: cliente
 *         description: Cliente object without idCliente
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - nome
 *           properties:
 *             nome:
 *               type: string
 *             contato:
 *               type: string
 *             endereco:
 *               type: string
 *             dataDeNascimento:
 *               type: string
 *               format: date
 *     responses:
 *       200:
 *         description: Successfully created cliente
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             data:
 *               $ref: '#/definitions/Cliente'
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
 *   Cliente:
 *     type: object
 *     properties:
 *       idCliente:
 *         type: integer
 *       nome:
 *         type: string
 *       contato:
 *         type: string
 *       endereco:
 *         type: string
 *       dataDeNascimento:
 *         type: string
 *         format: date
 */
clienteRouter.post('/', async (req, res) => {
	try {
		const cliente = req.body as Omit<Cliente, 'idCliente'>

		if (!cliente.nome) {
			return res.status(422).json({
				ok: false,
				error: 'O atributo nome é obrigatorio'
			})
		}
		const createdClient = await ClienteRepository.createCliente(cliente)

		res.status(201).json({
			ok: true,
			data: createdClient
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
 * /api/v1/cliente:
 *   get:
 *     tags:
 *       - Cliente
 *     description: Retrieve a list of clientes. If a query string is provided, it searches for clientes by the query. Otherwise, it retrieves the top 15 clientes.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: query
 *         description: Search text to filter clientes by name or contact
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved clientes
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Cliente'
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
 *   Cliente:
 *     type: object
 *     properties:
 *       idCliente:
 *         type: integer
 *       nome:
 *         type: string
 *       contato:
 *         type: string
 *       endereco:
 *         type: string
 *       dataDeNascimento:
 *         type: string
 *         format: date
 */
clienteRouter.get('/', async (req, res) => {
	try {
		const query = req.query.query as unknown
		if (!query || typeof query !== 'string') {
			const clientes = await ClienteRepository.getTopNClientes(15)
			res.json({
				ok: true,
				data: clientes
			})
		}
		const searchText = query as string

		const clientes = await ClienteRepository.searchClientesByText(searchText)
		res.json({
			ok: true,
			data: clientes
		})
	} catch (e) {
		res.json({
			ok: false,
			error: e.message
		})
	}
})


/**
 * @swagger
 * /api/v1/cliente/{id}:
 *   delete:
 *     tags:
 *       - Cliente
 *     description: Deletes a cliente by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID of the cliente
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Cliente successfully deleted
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *       400:
 *         description: Invalid ID supplied
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             error:
 *               type: string
 *       500:
 *         description: Server error
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             error:
 *               type: string
 */
clienteRouter.delete('/:id', async (req, res) => {
	try {
		const idCliente = parseInt(req.params.id)
		if (isNaN(idCliente)) {
			return res.status(400).json({ ok: false, error: 'Invalid id' })
		}

		await ClienteRepository.deleteCliente(idCliente)

		res.json({ ok: true })
	} catch (e) {
		res.status(500).json({ ok: false, error: e.message })
	}
})


/**
 * @swagger
 * /api/v1/cliente/{id}:
 *   put:
 *     tags:
 *       - Cliente
 *     description: Updates a cliente by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID of the cliente to be updated
 *         in: path
 *         required: true
 *         type: integer
 *       - in: body
 *         name: body
 *         description: Cliente data to be updated
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Cliente'
 *     responses:
 *       200:
 *         description: Cliente successfully updated
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *       400:
 *         description: Invalid ID supplied or bad request
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             error:
 *               type: string
 *       500:
 *         description: Server error
 *         schema:
 *           type: object
 *           properties:
 *             ok:
 *               type: boolean
 *             error:
 *               type: string
 * definitions:
 *   Cliente:
 *     type: object
 *     properties:
 *       nome:
 *         type: string
 *       contato:
 *         type: string
 *       endereco:
 *         type: string
 *       dataDeNascimento:
 *         type: string
 *         format: date
 */
clienteRouter.put('/:id', async (req, res) => {
	try {
		const idCliente = parseInt(req.params.id)
		if (isNaN(idCliente)) {
			return res.status(400).json({ ok: false, error: 'Invalid id' })
		}

		const clienteData = req.body
		await ClienteRepository.updateCliente(idCliente, clienteData)

		res.json({ ok: true })
	} catch (e) {
		res.status(500).json({ ok: false, error: e.message })
	}
})

export default clienteRouter
