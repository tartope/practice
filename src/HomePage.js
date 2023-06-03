import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

export const HomePage = () => {
    let [character, setCharacters] = useState("");

    const url = 'https://hp-api.onrender.com/api/characters'
    const usersQuery = useQuery(`characters`, async ()=> await axios.get(url))
    
    if(usersQuery.isFetched && character === ""){
        const dataList = usersQuery.data.data;
        // console.log(dataList)
        // for (let char of dataList){
        //     console.log(char.name)
        // }
        const charList = dataList.map(char =>{
            return <p key={char.id}>{char.name}</p>
        })
        setCharacters(charList)
    }

  return (
    <div>
        <h1>HomePage</h1>
        <h2>Harry Potter Characters</h2>
        {character}
    </div>
  )
}
