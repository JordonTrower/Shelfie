import dotenv from 'dotenv';
import express from 'express';
import knex from 'knex';
import BodyParser from 'body-parser'
import Controller from './ProductController'

dotenv.config();
const app = express();

const knexConnection = knex({
	client: 'pg',
	connection: process.env.CONNECTIONSTRING
});

app.use(BodyParser.json())

app.set('db', knexConnection);


function normalizePort(val) {
	const port = parseInt(val, 10)

	if (Number.isNaN(port)) {
		return val
	}

	if (port >= 0) {
		return port;
	}
	return false;
}

const port = normalizePort(process.env.SERVERPORT || 3001)

app.get('/api/inventory', Controller.GetProducts)
app.post('/api/inventory', Controller.CreateProduct)
app.delete('/api/inventory/:id', Controller.DeleteProduct)
app.put('/api/inventory/:id', () => {})




app.listen(port, () => {
	console.log(`listening on port ${port} `)
})