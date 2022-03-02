import { useEffect, useState} from 'react'

const event_id = 1

async function fetchEvents(event_id, artist_email){
    const res = await fetch('http://localhost:3002/events')
    //const res = await fetch(process.env.ACTCITING-REACT-URI + '/')
    const data = await res.json()
    // data.filter(events => events.artistEmail === artistEmail)
    console.log("data", data)
    const event = data.find(events => events.event_id === event_id)// && events.artist_email === artist_email)    
    
    console.log(event)
    return event
}

const SearchEventsForm = (props) =>{

    const [eventId, setEventId] = useState('')
    const [artistEmail, setArtistEmail] = useState('')

    const onSubmit = (e) =>{
        // TO PREVENT THE PAGE RELOAD ON SUBMIT
        e.preventDefault()

        const event = fetchEvents(artistEmail, eventId)

        return <EventsPage event={event}/>
    
    }

    return (

    <form onSubmit={onSubmit}>

           <div>
               <label>Enter your event id </label>
               <input type='number' placeholder="1" 
                value={eventId} onChange={(e)=> {setEventId(e.target.value)}}/>

           </div>

           <div>
               <label>Enter your email </label>
               <input type='text' placeholder="1" 
                value={artistEmail} onChange={(e)=> {setArtistEmail(e.target.value)}}/>
                
           </div>

           <input type='submit' value='Find Event' />

       </form>
    )
    
}



const  EventsPage = (props) =>{

    // const [event, setEvent] = useState({})

    // useEffect(() => {
    //     fetchEvents(props.artistEmail, props.eventId).then(setEvent)
    // }, [])


    return (
        <>
        
            <h1>{props.event.event_name}</h1>
            <h4>{props.event.event_description}</h4>
            <h4>{props.event.artist_name}</h4>
            <h4>{props.event.date}</h4>
            <h4> {props.event.genre} </h4>
            <h4>{props.event.status} </h4>

        </>
    )
}


export default SearchEventsForm