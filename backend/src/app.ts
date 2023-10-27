import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import http from 'http'
import homeRouter from './routes/home'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import apiRouter from './routes/api'
import cors from 'cors'
import mysqlConnection from './utils/mysqlConnection'

require('dotenv').config()

const debug = require('debug')('calvin-barista:server')
const app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.set('port', PORT)

console.info(`Starting server on http://localhost:${PORT}`)

const server = http.createServer(app)

server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)
server.on('close', onClose)


app.use('/', homeRouter)
app.use('/api', apiRouter)

const swaggerSpec = swaggerJSDoc({
	failOnErrors: true,
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Table Boss API',
			version: '1.0.0',
		},
	},
	apis: [
		`${__dirname}/src/routes/**/*.{ts,js}`,
		`${__dirname}/routes/**/*.{ts,js}`
	]
})

app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs', swaggerUi.setup(swaggerSpec))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, _) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	console.error(err)

	// render the error page
	res.status(err.status || 500)
	res.json({ 'message': 'error' })
})


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error
	}

	const bind = typeof PORT === 'string'
		? 'Pipe ' + PORT
		: 'Port ' + PORT

	// handle specific listen errors with friendly messages
	switch (error.code) {
	case 'EACCES':
		console.error(bind + ' requires elevated privileges')
		process.exit(1)
		break
	case 'EADDRINUSE':
		console.error(bind + ' is already in use')
		process.exit(1)
		break
	default:
		throw error
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	const addr = server.address()
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port
	debug('Listening on ' + bind)
}

/**
 * Event listener for HTTP server "close" event.
 */
function onClose() {
	mysqlConnection.connection.end()
}


export default app
