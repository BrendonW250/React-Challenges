import React from "react"

// export default function Card(props) {
//     let badgeText
//     if (props.openSpots === 0) {
//         badgeText = "SOLD OUT"
//     } else if (props.location === "Online") {
//         badgeText = "ONLINE"
//     }
    
//     /*
//     Challenge:
//     1. Display the correct text in the badge based on the logic above
//     2. Only display the badge if badgeText has a value
//     */
    
//     return (
//         <div className="card">
//             {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
//             <img src={`../images/${props.img}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.rating}</span>
//                 <span className="gray">({props.reviewCount}) • </span>
//                 <span className="gray">{props.location}</span>
//             </div>
//             <p className="card--title">{props.title}</p>
//             <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
//         </div>
//     )
// }

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */

    // Essentially based on the condition above, if there is any value (hence the 
    // first badgeText, the larger badge gets displayed on the picture)
    // And based on off what text gets put on the picture gets put below
    // the picture
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}