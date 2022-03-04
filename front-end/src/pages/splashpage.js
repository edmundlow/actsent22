import * as React from 'react'
import { useHistory } from 'react-router-dom'
import {useState} from 'react'
import FilterForm from '../components/filterForm/filterForm'


const SplashPage= () => {
    const history= useHistory()
    const allvenues = () => {
        history.push(`/venues`)
    }

    const onFilter = (location) => {
        history.push(`/venues/location${location}`)
    }

    return(
        <div className="jumbotron text-center">
        <h1 className="display-4">
            Welcome to ActSent
        </h1>
        <h2 className="lead">Get started below</h2>
        <button className="btn btn-success" onClick={allvenues}>View all Venues</button>

        <FilterForm onFilter={onFilter}></FilterForm>
        </div>
    )
}
export default SplashPage