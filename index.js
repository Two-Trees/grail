const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
// const schema = require('./schema/schema')
// const { graphqlHTTP } = require('express-graphql')

const app = express()
app.use(cors())

// Middleware to parse the body of incoming requests as JSON
app.use(express.json());
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Two-Trees:vorplesword@cluster0.g2rte.mongodb.net/grail-db?retryWrites=true&w=majority'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connection.once('open', () => {
    console.log('conneted to mongodb');
});

app.get('/', async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/api/cards', (req, res) => {
  const { title, description } = req.body
  const newCard = new Card({ title, description })
  newCard.save()
  res.status(201).send("New Card Saved")
});

app.delete('/api/cards/:title', (req, res) => {
  const titleToDelete = req.params.title;
  Card.findOneAndDelete({ title: titleToDelete })
  console.log("pinged delete route in index.js")
});


// Create a schema for the card data
const cardSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
  });
  
// Create a model for the "cards" collection
const Card = mongoose.model('Card', cardSchema);

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

app.listen(4000, ()=> {
  console.log('listening for requests on port 4000')
})


// Router to handle incoming requests
// const router = express.Router();
// app.use('/', router)

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));