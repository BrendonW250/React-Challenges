import React from 'react'
// import Contact from './Contact'
import Contact from './destructuring-props'

// Here is where the details you want for the prop you created in the
// component is created
// The attributes look similar to HTML attributes 
// But in React this is how the component get their information
// And whatever is put within the Component's attributes is 
// displayed on the screen
function App(){
    return (
        <div className='contacts'>

            {/* This component (Contact) now has 4 props tied to it */}
            <Contact 
                img="./images/mr-whiskerson.png"
                name='Mr.Whiskerson'
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />

            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />

            <Contact
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />

            <Contact
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App

