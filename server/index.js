// const express = require('express');
// require('dotenv').config();
// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema/schema.js');
import express from 'express';
const port = process.env.PORT || 3000;
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import connectDB from './config/db.js';

// Configure environment variables
dotenv.config();

// Initiate express server
const app = express();

// Connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));


app.listen(port, console.log(`Server running on port ${port}`));