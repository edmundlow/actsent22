import React from 'react';

import { useHistory} from "react-router-dom";

const ViewVenuePage = (props) =>{
  const history = useHistory();

  return (

    <button onClick={() => history.push(`/SingleVenuePage/${props.id}`)}>

      Click me

    </button>

  )

}



export default ViewVenuePage