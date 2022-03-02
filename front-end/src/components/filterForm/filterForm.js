import {useState} from 'react'
import { prependOnceListener } from '../../../../back-end/server'

const FilterForm = (props) => {
    const [date, setDate] = useState()
    const [location, setLocation] = useState()
    const [capacity, setCapacity] = useState()

    const onSubmit = (e) => {
        e.preventDefault()

        props.onBook(location)
    }

    return(

        <form onSubmit={onSubmit}>

            <div>
                <label>Date of Event</label>
                <input type={'date'} value={date}></input>
            </div>
            
            <div>
                <label>Location</label>
                <input type={'text'} value={location} placeholder="London"></input>
            </div>

            <div>
                <label>Venue Capacity</label>
                <input type={'number'} value={capacity}></input>
            </div>

            <input type='submit' value='View Selected Venues' />
        </form>
    )
}

export default FilterForm