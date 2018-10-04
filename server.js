const express = require('express')
const app = express()
const port = 5000


app.get('/api/users',
	(req,res) => {
		const users = [
		{ id:1, firstName: 'Buse', lastName: 'Güldiken'},
		{ id:2, firstName: 'Fname', lastName: 'Lname'}
		]
	})
app.get('/', (req, res) => res.send('Hello World!'))







app.listen(port, () => console.log(`Example app listening on port ${port}!`))