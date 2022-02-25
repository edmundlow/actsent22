import React from "react";
import userEvent from "@testing-library/user-event"
import reactTest, { render, screen } from "@testing-library/react"
import ListOfVenues from "./ListOfVenues"
import VenueListItem from "../venuelistitem/VenueListItem"

it("should render a list of venues - lucy's lounge and mariolas palace", () => {
    render(<VenueListItem name={"Lucy"} location={"London"} description={"mydescription"} image={"myimage"}/>)
    
})