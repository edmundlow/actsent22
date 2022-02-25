import * as React from 'react'
import BookBtn from '../components/bookBtn/BookBtn'
import VenueListItem from '../components/venuelistitem/VenueListItem'
import { useEffect, useState} from 'react'
import ListOfVenues from '../components/listofvenues/ListOfVenues'
import { useParams, withRouter} from "react-router-dom";


//const onClick = () =>{console.log("Book button is clicked!")}

async function fetchVenue(){
    console.log("wellcome to venue")
    const res = await fetch('http://localhost:3002/venue')
    const data = await res.json()
    console.log(data)
    return data
  }

const SingleVenuePage = ({match}) =>{
    const { id } = useParams
    const [venueState, setVenueState] = useState([])
    useEffect(() => {
        fetchVenue().then(setVenueState)
    }, []
    )
    console.log(venueState)
    console.log(id)
    return (
        <>
        {venueState.filter((venue) => venue.id === id).map(venue => {
            return (
                <div>
                <div>
                    <h2>{venue.name}</h2>
                </div>
                </div>
            )
             })
        }
        </> )}

export default SingleVenuePage