const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// Middleware to parse the body of incoming requests as JSON
app.use(express.json());

mongoose.connect('mongodb+srv://Two-Trees:vorplesword@cluster0.g2rte.mongodb.net/grail-db?retryWrites=true&w=majority'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connection.once('open', () => {
    console.log('conneted to mongodb');
});

// Create a schema for the card data
const cardSchema = new mongoose.Schema({
    title: String,
    description: String,
  });
  
  // Create a model for the "cards" collection
const Card = mongoose.model('Card', cardSchema);

// Router to handle incoming requests
// const router = express.Router();
// app.use('/', router)

app.use(cors())

app.get('/', async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(4000, ()=> {
    console.log('listening for requests on port 4000')
})