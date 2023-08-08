const graphql = require('graphql');
const _ = require('lodash');
const Card = require('./models/Card')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const CardType = new GraphQLObjectType({
    name: 'Card', 
    fields: () => ({
        id: String, 
        title: String, 
        description: String
    })
})