import React from 'react';
import './App.css';
import './content/site.css';
import Header from './pages/header';
import StarWar from './pages/starwar';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
         <StarWar/>
      </div>
    </div>
  );
}

export default App;
