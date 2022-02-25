import {useState} from 'react'

const BookingForm = (props) =>{

    const [artistName, setArtistName] = useState('')
    const [date, setDate] = useState('')
    const [capacity, setCapacity] = useState('')

    const onSubmit = (e) =>{
        // TO PREVENT THE PAGE RELOAD ON SUBMIT
        e.preventDefault()

        if(!artistName){
            alert('Please add a name!')
            return
        }

        props.onBook({artistName, date, capacity})

        setArtistName("")
        setDate("")
        setCapacity("")
    }

    return (
       <form onSubmit={onSubmit}>

           <div>
               <label>Artist Name</label>
               <input type='text' placeholder="Mozart" 
                value={artistName} onChange={(e)=> {setArtistName(e.target.value)}}/>
           </div>

           <div>
               <label>Date</label>
               <input type='text' placeholder="27 January 1756" 
               value={date} onChange={(e)=> {setDate(e.target.value)}}/>
           </div>
           
           <div>
               <label>Capacity</label>
               <input type='text' placeholder="100"
               value={capacity} onChange={(e)=> {setCapacity(e.currentTarget.value)}}/>
           </div>

           <input type='submit' value='Request a Booking' className='btn btn-block'/>

       </form>
    )
}

export default BookingForm