const app = require('./server')
const request = require('supertest');



describe('GET /venue', function() {
  it('responds with json', async function() {
    const response = await request(app)
      .get('/venue')
    //expect(response.headers["Content-Type"]).toMatch(/json/)
    expect(response.body).toEqual([
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
})
