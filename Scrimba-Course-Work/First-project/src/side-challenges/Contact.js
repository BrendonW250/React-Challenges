import React from "react"

// This is the contact component for this specific challenge
function Contact(props) {
    console.log(props)

    // Props is considered to be an object
    // Which means we can use dot notation to be able
    // to access the properties we want displayed
    return (
        <div className="contact-card">
            <img src="{props.img}" />
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
       
    )
}

export default Contact