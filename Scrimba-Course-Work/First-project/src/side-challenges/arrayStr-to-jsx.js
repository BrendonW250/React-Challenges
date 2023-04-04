import React from "react"
import Joke from "./Joke"

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function App() {

    // original
    // const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    // return (
    //     <div>
    //         {colors}
    //     </div>
    // )
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    return (
        <div>
            <h3>{colors[0]}</h3>
            <h3>{colors[1]}</h3>
            <h3>{colors[2]}</h3>
            <h3>{colors[3]}</h3>
            <h3>{colors[4]}</h3>
            <h3>{colors[5]}</h3>
            <h3>{colors[6]}</h3>
        </div>
    )
}