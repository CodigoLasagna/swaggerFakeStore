const express = require('express');
const router = express.Router();

//Rutas de ejemplo
/**
* @swagger
* /api/users:
*   get:
*     summary: Retrieve a list of users
*     responses:
*       200:
*         description: A list of users
*/
router.get('/', (req, res) => {
	res.send('Get all users');
});

//Rutas de ejemplo
/**
* @swagger
* /api/users:
*   post:
*     summary: create a new user
*     responses:
*       200:
*         description: returns an user
*/
router.post('/', (req, res) => {
	res.send('Create new user');
});

module.exports = router;
