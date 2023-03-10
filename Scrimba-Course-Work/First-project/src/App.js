
// For mapDataIntoComponents folder 
import React from 'react'
import Navbar from './abnbComponents/Navbar'
import Hero from './abnbComponents/Hero'
import Card from './abnbComponents/Card'
import data from './data' //data imported from the data file

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App(){

  // We are mapping through the array in the data file 
  // And bringing over the value that each prop possess to the 
  // component to be displayed
  const cards = data.map(item => {
    return (
      <Card 
        img= {item.coverImg}  //the img is named different in the data file which is why coverImg is necessary
        rating= {item.stats.rating}
        reviewCount= {item.stats.reviewCount}
        location= {item.location}
        title= {item.title}
        price= {item.price}
      />
    )
  })

// This is where the render happens
// Displaying the Navbar 
// and the cards that possess the props


  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}











// // import logo from './logo.svg';
// // import './App.css';

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Jokes from './side-challenges/propsPracticeApp'


// // How would you pass in a non string prop in a component?
// // Simply put curly braces in the component


// function App() {

  
//   return (
    
//     <div className='App'>
//       <Jokes 
//         setup="I got my daughter a fridge for her birthday."
//         punchline="I can't wait to see her face light up when she opens it"
//         number= {86}
        
//       />

//       <Jokes
//         setup="How did the hacker escape the police?"
//         punchline="He just ransomware!"

//       />

//       <Jokes
//         setup="Why don't pirates travel on mountain roads?"
//         punchline="Scurvy"

//       />

//       <Jokes
//         setup="Why do bees stay in the hive in the winter?"
//         punchline="Swarm"

//       />

//       <Jokes
//         setup="What's the best thing about Switzerland?"
//         punchline="I don't know, but the flag is a big plus!"

//       />

      
//     </div>
//   )
// }

// ReactDOM.render(<Jokes />, document.getElementById('root'))

// export default App
// // function App() {
// //   return (
// //     <div className="App">
// //             <Contact
// //                 img="./images/mr-whiskerson.png" 
// //                 name="Mr. Whiskerson"
// //                 phone="(212) 555-1234"
// //                 email="mr.whiskaz@catnap.meow"
// //             />
// //             <Contact 
// //                 img="./images/fluffykins.png"
// //                 name="Fluffykins"
// //                 phone="(212) 555-2345"
// //                 email="fluff@me.com"
// //             />
// //             <Contact 
// //                 img="./images/felix.png"
// //                 name="Felix"
// //                 phone="(212) 555-4567"
// //                 email="thecat@hotmail.com"
// //             />
// //             <Contact 
// //                 img="./images/pumpkin.png"
// //                 name="Pumpkin"
// //                 phone="(0800) CAT KING"
// //                 email="pumpkin@scrimba.com"
// //             />
      
// //     </div>
// //   );
// // }

// // ReactDOM.render(<App />, document.getElementById('root'))

// // export default App;
