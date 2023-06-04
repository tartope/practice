import React, { useEffect, useState } from 'react'
// Import axios to help with requests
import axios from 'axios'
// Import useQuery to support request with caching/error handling, and sessions
import { useQuery } from 'react-query'

export const HomePage = () => {
    let [character, setCharacters] = useState("");

    const url = 'https://hp-api.onrender.com/api/characters'
    // Use useQuery and pass it 2 arguments (api endpoint, async/await get arrow function); assign it to variable
    const usersQuery = useQuery(`characters`, async ()=> await axios.get(url))

    useEffect(()=>{
        // If usersQuery is fetched and character is empty
        if(usersQuery.isFetched && character === ""){
            // Grab the data in a list
            const dataList = usersQuery.data.data;

            // console.log(dataList)
            // for (let char of dataList){
            //     console.log(char.name)
            // }

            // Map through the list and create an element for each character
            const charList = dataList.map(char =>{
                return <p key={char.id}>{char.name}</p>
            })
            // Use state to update page to charList
            setCharacters(charList)
        }

    }, []);

  return (
    <div>
        <h1>HomePage</h1>
        <h2>Harry Potter Characters</h2>
        {character}
    </div>
  )
}
