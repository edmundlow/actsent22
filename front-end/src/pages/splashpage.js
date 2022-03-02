import * as React from 'react'
import { useHistory } from 'react-router-dom'

const SplashPage= () => {
    const history= useHistory()
    const allvenues = () => {
        history.push(`/venues`)
    }
    return(
        <div>
        <h1>
            Welcome to ActSent
        </h1>
        <h2>Get started below</h2>
        <button onClick={allvenues}>View all Venues</button>
        </div>
    )
}

export default SplashPage