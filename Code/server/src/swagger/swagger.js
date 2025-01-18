const express = require('express')
const router = express.Router()

const options = {
  swaggerDefinition: {
    info: {
      title: 'Ecommerce For online Shopping',
      version: '1.0.0',
      description: 'Ecommerce for online shop',
      contact: {
        email: 'dharmesh.nadola@nagarro.com'
      }
    },
    tags: [
      {
        name: 'Ecommerce Endpoints',
        description: 'Enpoints For Health Checkup and retrive Producs'
      }
    ],
    schemes: ['http'],
    host: '<SERVER_ALB_URL>',
    basePath: '/'
  },
  apis: [
    './src/app.js',
  ],
}

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = swaggerJSDoc(options)
require('swagger-model-validator')(swaggerSpec)

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

function validateModel(name, model) {
  const responseValidation = swaggerSpec.validateModel(name, model, false, true)
  if (!responseValidation.valid) {
    console.error(responseValidation.errors)
    throw new Error(`Model doesn't match Swagger contract`)
  }
}

module.exports = {
  router,
  validateModel
}
