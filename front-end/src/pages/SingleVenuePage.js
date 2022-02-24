import * as React from 'react'
import BookBtn from '../components/bookBtn/BookBtn'


const onClick = () =>{console.log("Book button is clicked!")}

const SingleVenuePage = (props) =>{
    return (
    <>
    <header> {props.name}</header>
     <p> {`Description: ${props.desc}`} </p>
      <div> {props.imageUrl}
       </div> <div>
            <BookBtn onClick={onClick}/>
             </div> </> )}

export default SingleVenuePage