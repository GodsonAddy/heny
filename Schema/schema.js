const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

const RestaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    restaurant: {
      type: RestaurantType,
      args: { id: { type: GraphQLString } },
      resolve (parent, args) { }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
