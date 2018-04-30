// const express = require('express')

const { db } = require('./models');

// const app = express();

db.sync({force: true})
  .then(() => {
    console.log('database synced!')
  })
  .catch( (err) => {
    console.log('Something went wrong!');
    console.log(err)
  })
  .finally( () => {
    db.close()
  })

  db.sync()

