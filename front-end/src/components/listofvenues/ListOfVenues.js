import Venue from '../venue/Venue'
import { useEffect, useState} from 'react'

async function fetchVenues(){
    console.log("the button has been clicked woooo!")
    const res = await fetch('http://localhost:3000/venue')
    const data = await res.json()
    console.log(data)
    return data
  }

const  ListOfVenues = async (props) =>{

    const [listState, setListState] = useState()

    props.venues = await fetchVenues()

    return (
        <>
        {
            props.venues.map(venue => {
                return <Venue name={venue.venue_name}/>
            })
        }
        </>
    )
}

export default ListOfVenues