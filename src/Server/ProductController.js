export default {

	GetProducts: (req, res) => {
		const knex = req.app.get('db');
		knex.select().table('products').then(dbRes => {
			res.send(dbRes)
		})
	},
	GetProduct: (req, res) => {
		const knex = req.app.get('db');
		knex.select().where('id', req.params.id).table('products').then(dbRes => {
			res.send(dbRes)
		})
	},

	CreateProduct: (req, res) => {
		const knex = req.app.get('db');

		knex.insert(req.body).from('products').select('*').then(() =>
			knex.select().table('products').then(dbRes =>
				res.send(dbRes)
			)
		)
	},

	DeleteProduct: (req, res) => {
		const knex = req.app.get('db');

		knex('products').where('id', req.params.id).del().then(() => {
			knex.select().table('products').then(dbRes => {
				res.send(dbRes)
			})
		})
	},

	UpdateProduct: (req, res) => {
		const knex = req.app.get('db');

		knex('products').where('id', req.params.id).update(req.body).then(() => {
			knex.select().table('products').then(dbRes => {
				res.send(dbRes)
			})
		})
	}
}