const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require ('./schema/schema');
 
const app = express();

const expressPlayground = require('graphql-playground-middleware-express')
  .default
 
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))
 
app.listen(4000, () => {
  console.log('Listening')
});
