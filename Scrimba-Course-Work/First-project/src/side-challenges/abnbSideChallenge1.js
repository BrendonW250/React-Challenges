import React from 'react'
import Navbar from '../abnbComponents/Navbar'
import Hero from '../abnbComponents/Hero'
import Card from '../abnbComponents/Card'

// *
// Challenge: Pass props to the Card component and display that data

// - img ("katie-zaferes.png")
// - rating ("5.0")
// - reviewCount (6)
// - country (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)

// */

export default function App() {
            // <Hero />
    return (
        <div>
            <Navbar />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="Jamaica"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}