// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
