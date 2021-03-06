import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import db from './db.js';

const app = express();
const collection = 'projects';

app.use(cors());
process.env.NODE_ENV !== 'prod' && app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register api routes
app.use('/status', express.static('build'));
app.use('/', express.static('build'));
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

app.get('/getTodos', (req, res) => {
  db.getDB()
    .collection(collection)
    .find({})
    .toArray((err, documents) => {
      if (err) {
        console.log(err);
      } else {
        console.log(collection);
        console.log(documents);
        res.json(documents);
      }
    });
});

app.put('/:id', (req, res) => {
  const todoID = req.params.id;
  const userInput = req.body;

  db.getDB()
    .collection(collection)
    .findOneAndUpdate(
      { _id: db.getPrimaryKey(todoID) },
      { $set: { todo: userInput.todo } },
      { returnOriginal: false },
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
});

db.connect((err) => {
  if (err) {
    console.log('unable to connect to database');
    // process.exit(1);
    throw err;
  } else {
    app.listen(3000, () => {
      console.log('connected to database, listening on port 3000');
    });
  }
});

export default app;
