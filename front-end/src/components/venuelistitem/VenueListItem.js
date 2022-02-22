

const VenueListItem = (props) =>{
    return (
        <div key={props.key}>
            <div class="card mb-3">
                <div class="card-body">
                    <img class="card-img-top" src={props.image} alt="Card image cap"/>
                    <h4 class="card-title">{props.name}</h4>
                    <p class="card-text">
                        {props.location}
                        <br/>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VenueListItem