import * as React from 'react'
import BookBtn from '../components/bookBtn/BookBtn'
import { useEffect, useState} from 'react'
import { useParams} from "react-router-dom";
import BookingForm from '../components/bookingForm/BookingForm'


async function fetchVenue(id){
    console.log("welcome to venue")
    const res = await fetch('http://localhost:3000/venue')
    const data = await res.json()

    // WE ONLY RETURN THE VENUE WHOSE ID MATCHES id
    return data.find(venue => venue.id === id)
  }


const SingleVenuePage = () =>{
    
    const [showBookingForm, setShowBookingForm] = useState(false)

    const [bookingRequest, setBookingRequest] = useState(
        {
            venueId: 1,
            artistName: "Mozart",
            date: "27 January 1756",
            capacity: 100
        }
    )

    const [venueState, setVenueState] = useState(undefined)

    const { id } = useParams()

    useEffect(() => {
        // WE HAVE TO parseInt THE ID TO CONVERT IT TO AN INT
        fetchVenue(parseInt(id)).then(setVenueState)
        
    }, [])

    const toggleBookingForm = () => {
        setShowBookingForm(!showBookingForm)
    }

    const submitRequest = (newBookingRequest) =>{

        console.log(newBookingRequest)
        
        setBookingRequest([...bookingRequest, 
            {
                venueId: parseInt(id),
                artistName: newBookingRequest.artistName,
                date: newBookingRequest.date,
                capacity: newBookingRequest.capacity
            }
        ])
       
        setShowBookingForm(!showBookingForm)
    }

    return (
        <>
            {
                venueState === undefined ? <p> please wait ..</p> : 
                <>
                    <img src={venueState.image} alt={""}/>
                    <h2> {venueState.name} </h2>
                    <h4> {venueState.location}</h4>
                    <h4> {venueState.description} </h4>

                    <BookBtn onClick={toggleBookingForm} text={showBookingForm ? "Cancel Request" : "Submit a Booking Request"}/>

                    {showBookingForm && <BookingForm onBook={submitRequest}/>}
                    

                </>
            }
        </> )}

export default SingleVenuePage