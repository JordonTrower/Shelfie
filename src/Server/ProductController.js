export default {

	GetProducts: (req, res) => {
		const knex = req.app.get('db');
		knex.select().table('products')
			.then(dbRes => {
				res.send(dbRes)
			})
			.catch(() => {
				res.status(400).send('failure');
			})
	},
	GetProduct: (req, res) => {
		const knex = req.app.get('db');
		knex.select().where('id', req.params.id).table('products')
			.then(dbRes => {
				res.send(dbRes)
			})
			.catch(() => {
				res.status(400).send('failure');
			})
	},

	CreateProduct: (req, res) => {
		const knex = req.app.get('db');

		knex.insert(req.body).from('products').select('*')
			.then(() =>
				res.status(200).send('Success')
			)
			.catch(() => {
				res.status(400).send('failure');
			})
	},

	DeleteProduct: (req, res) => {
		const knex = req.app.get('db');

		knex('products').where('id', req.params.id).del()
			.then(() => {
				knex.select().table('products')
					.then(dbRes => {
						res.send(dbRes)
					})
					.catch(() => {
						res.status(400).send('failure');
					})
			})
			.catch(() => {
				res.status(400).send('failure');
			})
	},

	UpdateProduct: (req, res) => {
		const knex = req.app.get('db');

		knex('products').where('id', req.params.id).update(req.body)
			.then(() => {
				res.status(200).send('Success')
			})
			.catch(() => {
				res.status(400).send('failure');
			})
	}
}