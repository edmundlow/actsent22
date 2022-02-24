import ViewVenuePage from '../ViewVenuePage/ViewVenuePage'

const VenueListItem = (props) =>{
    return (
        <div key={props.key}>

            <div class="card mb-3" >
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src={props.image} class="card-img" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.location} <br/>
                        {props.description}</p>
                        <ViewVenuePage />
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default VenueListItem