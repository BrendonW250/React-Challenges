import React from "react"

// This is the contact component for this specific challenge
function Contact(props) {
    console.log(props)

    // Props is considered to be an object
    // Which means we can use dot notation to be able
    // to access the properties we want displayed
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={props.img} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={props.img} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact