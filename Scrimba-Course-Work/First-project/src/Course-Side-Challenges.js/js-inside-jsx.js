// Airbnb clone section
// Lesson: Aside: JS inside JSX

import React from 'react'
import ReactDOM from 'react-dom'

function App(){
    const firstName = "Brendon"
    const lastName = "Wright"

    // Finish off the h1 below so it says hello brendon wright

    return (
        // result
        <h1>Hello {firstName} {lastName}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

// another example of using JS in JSX 

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    return (
        <h1>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))