const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My Dynamic API',
      version: '1.0.0',
      description: 'This is the dynamic API documentation for all endpoints',
    },
    servers: [
      {
        url: 'http://localhost:3000', // change as needed or make dynamic via env variables
      },
    ],
  },
  // Point to the API route files where you have Swagger JSDoc comments
  apis: ['./routes/**/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;