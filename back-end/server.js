const express = require('express')
const cors = require('cors')
const postgres = require('pg-promise')()
const app = express()

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
app.use(express.json())
app.get('/venue', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Arena 1',
      location: 'London',
      image: 'https://picsum.photos/id/101/200/200',
      description: 'The first arena'
    },

    {
      id: 2,
      name: 'Bills Bar',
      location: 'Manchester',
      image: 'https://picsum.photos/id/1047/200/200',
      description : "A bar belonging to bill"
    },

    {
      id: 3,
      name: 'Mariola\'s Palace Bar',
      location: 'Madrid',
      image: 'https://picsum.photos/id/1047/200/200',
      description : "Luxurious as its owner"
    },

    {
      id: 4,
      name: 'Lucy\'s Lounge',
      location: 'Luxembourg',
      image: 'https://picsum.photos/id/1047/200/200',
      description : "Legends only"
    },

  ])
})

//Insert event data into db
app.post('/create_event', (req, res) => {
  const venue_id = req.body.id
  const event_name = req.body.eventName
  const event_description = req.body.eventDescription
  const event_image = req.body.eventImage
  const artist_name = req.body.artistName
  const artist_email = req.body.artistEmail
  const genre=req.body.genre
  const status=req.body.status
  const date= req.body.date
  console.log("body:", req.body)
  console.log("atts:", [venue_id, date, event_name, event_description, event_image, artist_name, artist_email, genre, status])
  db.query(
    'INSERT INTO event(venue_id, date, event_name, event_description, event_image, artist_name, artist_email, genre, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ,$9) RETURNING event_id;',
    [venue_id, date, event_name, event_description, event_image, artist_name, artist_email, genre, status])
    .then(res.status(200).send('Event creation successful'))
})

// get all events
app.get('/events', async (req,res) => {
  const events = await db.query('SELECT a.venue_id, event_id, date, event_name, event_description, event_image, artist_name, artist_email, genre, status, venue_name, venue_geolocation, venue_address FROM event a left join listed_venues b on a.venue_id = b.venue_id;')

  res.send(events)
})

// // What do we need this for?
// app.put('/event', (req,res) => {
  
// })

//update status of existing event in event table
app.put('/event/status', (req,res) => {
  const new_status = req.body.status
  const event_id = req.body.event_id
  console.log("status", new_status);
  db.query(`UPDATE event SET status = '${new_status}' WHERE event_id = ${event_id}; `)
  .then(res.status(200).send('Status updated successfully'))
})

module.exports = app
