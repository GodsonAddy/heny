const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./Schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema
}))

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('ready')
})
