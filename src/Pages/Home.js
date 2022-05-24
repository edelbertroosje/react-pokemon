import React from 'react';
import axios from 'axios';

function Home() {
    async function fetchData() {
        try{
            const response = await axios.get(' https://pokeapi.co/api/v2/pokemon')
            console.log(response);

        }catch(e){
            console.error(e)
        }
    }
    fetchData()
    return (
        <>
        </>
    );
}

export default Home;