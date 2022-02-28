import { useEffect, useState} from 'react'

const event_id = 1

async function fetchEvents(event_id){
    const res = await fetch('http://localhost:3002/events')
    //const res = await fetch(process.env.ACTCITING-REACT-URI + '/')
    const data = await res.json()
    // data.filter(events => events.artistEmail === artistEmail)
    console.log("data", data)
    const event = data.find(events => events.event_id === event_id )    
    
    console.log(event)
    return event
  }


  const  EventsPage = (props) =>{

    const [event, setEvent] = useState({})
    useEffect(() => {
        fetchEvents(1).then(setEvent)
    }, []
    
    )
    return (
        <>
        <p>{event.event_name}</p>
        </>
    )
}


export default EventsPage