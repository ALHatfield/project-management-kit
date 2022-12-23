// const { projects, clients } = require('../sampleData.js');
// import { projects, clients } from "../sampleData.js";

import Client from '../models/Client.js';
import Project from '../models/Project.js';

import {
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList, 
    GraphQLNonNull
} from "graphql";


// Client type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
});


// Project type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        // active: { type: GraphQLString },
        // backlog: { type: GraphQLString },
        // complete: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return Client.findById(parent.clientId)
            }
        },
    })
});


// 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                // return projects;
                return Project.find();
            }
        },
        project: { 
            type: ProjectType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // mongoose method 
                // return projects.find(project => project.id === args.id);
                return Project.findById(args.id)
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                // return clients;
                return Client.find();
            }
        },
        client: { 
            type: ClientType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // mongoose method 
                // return clients.find(client => client.id === args.id);
                return Client.findById(args.id)
            }
        }
    }
});



// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClient: {
            type: ClientType,
            args: {
              name: { type: new GraphQLNonNull(GraphQLString) },
              email: { type: new GraphQLNonNull(GraphQLString) },
              phone: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
              const client = new Client({
                name: args.name,
                email: args.email,
                phone: args.phone,
              });
      
              return client.save();
            },          
        }
    }
});



export default new GraphQLSchema({
    query: RootQuery,
    mutation
});