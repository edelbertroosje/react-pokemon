import React from 'react';
import './App.css';
import axios from "axios";

function App() {
    async function fetchData() {
        try{
            const response = await axios.get(' https://pokeapi.co/api/v2/pokemon')
            console.log(response);

        }catch(e){
            console.error(e)
        }
    }
fetchData();
  return (
    <div>
      Begin hier met de opdracht!
        <h1>hello</h1>
    </div>
  );
}

export default App;
