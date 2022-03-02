import { useEffect, useState} from 'react'

//const event_id = 1

async function fetchEvents(event_id, artist_email){
    const res = await fetch('http://localhost:3002/events')
    //const res = await fetch(process.env.ACTCITING-REACT-URI + '/')
    const data = await res.json()
    // data.filter(events => events.artistEmail === artistEmail)
    console.log("data", data)
    console.log("event id", event_id)
    //const event = data.find(events => events.event_id === event_id)// && events.artist_email === artist_email)    
    
    //console.log(event)
    return data.find(events => events.event_id === event_id)// && events.artist_email === artist_email)
}



const SearchEventsForm = (props) =>{
    const [submitBtnState, setSubmitBtnState] = useState(true)
    const [eventId, setEventId] = useState(0)
    const [artistEmail, setArtistEmail] = useState('')
    const [event, setEvent] = useState({})
    
    useEffect(() => {
        fetchEvents(parseInt(eventId), artistEmail).then(setEvent)
    }, [submitBtnState])
    
    const onSubmit = (e) =>{
        // TO PREVENT THE PAGE RELOAD ON SUBMIT
        e.preventDefault()
        
       // const event = fetchEvents(eventId, artistEmail).then(setEvent)
        console.log(event)

        setSubmitBtnState(!submitBtnState)
    
    }

    return (
            <>

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

        <EventsPage event={event}/>
        
    </>
    )
    
}



const  EventsPage = (props) =>{

    // const [event, setEvent] = useState({})

    // useEffect(() => {
    //     fetchEvents(props.artistEmail, props.eventId).then(setEvent)
    // }, [])


    return (
        <>
        {
        props.event === undefined ? <p> please wait ..</p> : 
        <>
            <h1>{props.event.event_name}</h1>
            <h4>{props.event.event_description}</h4>
            <h4>{props.event.artist_name}</h4>
            <h4>{props.event.date}</h4>
            <h4> {props.event.genre} </h4>
            <h4>{props.event.status} </h4>

</>
}
        </>
    )
}


export default SearchEventsForm