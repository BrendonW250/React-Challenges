// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import ReactDOM from 'react-dom'
import Contact from './side-challenges/Contact'

function App() {
  return (
    <div className="App">
            <Contact
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
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
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
