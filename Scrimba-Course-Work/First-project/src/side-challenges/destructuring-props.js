import React from 'react'

// Challenge is to fix this code here
// So the destructing will run successfully

// function Contact({img, name, phone, email}){
//     return (
//         <div className="contact-card">
//             <img src={props.img}/>
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{props.phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

// export default Contact


// Solution
// The solution to this challenge is to simply delete
// the keyword "props" from the brackets since props isn't used
// in the parameter anymore

function Contact({img, name, phone, email}){
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact