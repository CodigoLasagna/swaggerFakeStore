const express = require('express');
const app = express();
const port = 3000;

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(express.json());

// importar rutas
const userRouter = require('./routes/users');
const swaggerJSDoc = require('swagger-jsdoc');
app.use('/api/users', userRouter);

//configuración swagger
const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'DummyBack',
			version: '1.0.0',
			description: 'API para gestionar usuarios',
		},
		servers: [
			{
				url: 'http://localhost:3000',
			},
		],
	},
	apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
	console.log(`Server listening at http:localhost:${port}`);
});
