const express = require('express')
const cors = require('cors')
const postgres = require('pg-promise')()
const app = express()

// To-Do: find out DB name
const db = postgres({
 host: process.env.DB_HOSTNAME || '127.0.0.1',
 database: 'gigstr',
 user: 'gigstr',
 password: process.env.DB_PASSWORD || 'gigstr',
})

// app.use(cors())
// app.get('/', async (req, res) => {
//  const venue = await db.query('SELECT venue_name FROM venue ;')
//  res.send(venue)
// })

app.use(cors())
app.get('/venue', (req, res) => {
  res.json([
    {
      name: 'Arena 1',
      location: 'London',
      image: 'https://picsum.photos/id/101/200/200',
      description: 'The first arena'
    },

    {
      name: 'Bills Bar',
      location: 'Manchester',
      image: 'https://picsum.photos/id/1047/200/200',
      description : "A bar belonging to bill"
    },

    {
      name: 'Mariola\'s Palace Bar',
      location: 'Madrid',
      image: 'https://picsum.photos/id/1047/200/200',
      description : "Luxurious as its owner"
    },

    {
      name: 'Lucy\'s Lounge',
      location: 'Luxembourg',
      image: 'https://picsum.photos/id/1047/200/200',
      description : "Legends only"
    },

  ])
})


app.post('/create_event', (req, res) => {
  const venue_id = req.body.id
  const venue_name = req.body.location
  const date = req.body.date
  const event_name = req.body.name
  const event_description= req.body.description
  const event_image = req.body.image
  const artist_name = req.body.artist_name
  const artist_email=req.body.artist_email
  const genre=req.body.genre
  const status=req.body.status
  db.query(
    'INSERT INTO events(venue_id, venue, date, event_name,  event_description, event_image,artist_name,artist_email,genre,status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ,$9) RETURNING event_id;',
    [venue_id, venue_name, date, event_name, event_description, event_description, event_image, artist_name, artist_email, genre, status])
    .then(res.status(200).send('Event creation successful'))
})

app.get('/events', async (req,res) => {
  const events = await db.query('SELECT * FROM event ;')
  res.send(events)
})

app.put('/event', (req,res) => {
  
})

app.put('/event/status', (req,res) => {
  const new_status = req.body.status
  const event_id = req.body.id
  db.query(`UPDATE event SET status = ${new_status} WHERE id = ${event_id} `)
  .then(res.status(200).send('Status updated successfully'))
})

module.exports = app
