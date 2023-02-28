// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import ReactDOM from 'react-dom'
import Jokes from './side-challenges/propsPracticeApp'


// How would you pass in a non string prop in a component?
// Simply put curly braces in the component


function App() {

  
  return (
    
    <div className='App'>
      <Jokes 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it"
        number= {86}
        
      />

      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"

      />

      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"

      />

      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"

      />

      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"

      />

      
    </div>
  )
}

ReactDOM.render(<Jokes />, document.getElementById('root'))

export default App
// function App() {
//   return (
//     <div className="App">
//             <Contact
//                 img="./images/mr-whiskerson.png" 
//                 name="Mr. Whiskerson"
//                 phone="(212) 555-1234"
//                 email="mr.whiskaz@catnap.meow"
//             />
//             <Contact 
//                 img="./images/fluffykins.png"
//                 name="Fluffykins"
//                 phone="(212) 555-2345"
//                 email="fluff@me.com"
//             />
//             <Contact 
//                 img="./images/felix.png"
//                 name="Felix"
//                 phone="(212) 555-4567"
//                 email="thecat@hotmail.com"
//             />
//             <Contact 
//                 img="./images/pumpkin.png"
//                 name="Pumpkin"
//                 phone="(0800) CAT KING"
//                 email="pumpkin@scrimba.com"
//             />
      
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// export default App;
