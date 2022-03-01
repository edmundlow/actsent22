import VenueListItem from '../venuelistitem/VenueListItem'
import { useEffect, useState} from 'react'


async function fetchVenues(){
   
    const res = await fetch('http://localhost:3003/venue_info')
    //const res = await fetch(process.env.ACTCITING-REACT-URI + '/')
    const data = await res.json()
    console.log(data)
    return data
}

const  ListOfVenues = (props) =>{

    const [listState, setListState] = useState([])

    useEffect(() => {
        fetchVenues().then(setListState)
    }, [])

    return (
        <>
            {
                listState.map(venue => {
                    return <VenueListItem key= {venue.venue_id} id= {venue.venue_id} name= {venue.venue_name} 
                            location= {venue.venue_geolocation} description= {venue.venue_description} image= {venue.venue_image}/>
                })
            }
        </>
    )
}

export default ListOfVenues