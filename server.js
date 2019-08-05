const express = require('express');
const app = express();
const graphqlHttp = require('express-graphql');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

//dotenv setup
dotenv.config();

//GraphQL
app.use(
  '/graphql',
  graphqlHttp({
    schema,
    graphiql: true
  })
);

mongoose.connect(process.env.mongodb_url, { useNewUrlParser: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.listen(process.env.port, () => {
  console.log(`App listening on port ${process.env.port}!`);
});
