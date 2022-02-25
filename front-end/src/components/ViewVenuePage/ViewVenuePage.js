import React from 'react';

import { useHistory , useParams} from "react-router-dom";



const ViewVenuePage = (props) =>{
        //const id=1
        const history = useHistory();
        return (

          <button onClick={() => history.push(`/SingleVenuePage/${props.id}`)}>

            Click me

          </button>

        )

   

    // return <button onClick={()=> history.push(`../pages/SingleVenuePage`)}/>

}



export default ViewVenuePage