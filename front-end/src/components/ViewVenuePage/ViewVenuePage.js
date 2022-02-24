import React from 'react';

import { useHistory } from "react-router-dom";



/*

import React from 'react';

import { useHistory } from 'react-router-dom';



export default () => {

  const history = useHistory();

   

  return (

    <button onClick={() => history.push('/your/path')}>

      Click me

    </button>

  );

};*/



const ViewVenuePage = () =>{


        const history = useHistory();
        return (

          <button onClick={() => history.push('/SingleVenuePage')}>

            Click me

          </button>

        )

   

    // return <button onClick={()=> history.push(`../pages/SingleVenuePage`)}/>

}



export default ViewVenuePage