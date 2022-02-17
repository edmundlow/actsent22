const express = require('express')
const cors = require('cors')
// const postgres = require('pg-promise')()
const app = express()

// const db = postgres({
//  host: '127.0.0.1',
//  database: 'actsent',
//  user: 'postgres',
//  password: 'mysecretpassword'
// })

// app.use(cors())
// app.get('/', async (req, res) => {
//  const venue = await db.query('SELECT venue_name FROM venue ;')
//  res.send(venue)
// })

app.use(cors())
app.get('/venue', (req, res) => {
  res.json([
    {
      venue_name: 'Arena 1',
      location: 'London',
      image: 'https://picsum.photos/id/101/200/200',
      description: 'The first arena'
    },

    {
      venue_name: 'Bills Bar',
      location: 'Manchester',
      image: 'https://picsum.photos/id/1047/200/200',
      description: 'A bar belonging to Bill'
    }
  ])
})

module.exports = app
