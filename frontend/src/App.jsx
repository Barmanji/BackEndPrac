import React from 'react';
import { useEffect, useState } from 'react'

import axios from 'axios';
import { document } from 'postcss';
function App() {
    const [jokes, setJokes] = useState([])
    useEffect(()=>{
        axios.get('/api/jokes')
            .then((res)=>{setJokes(res.data)})
            .catch((error)=> {
                console.log(error)
            })
    },[])
    return (
        <>
            <div className='text-center'>
                <h1 className='underline text-5xl'> Hi. making something something </h1>
                <p> JOKES: {jokes.length}</p>
                {
                    jokes.map((joke, index)=>(
                        <div key={joke.id}>
                            <h1> {joke.title}  </h1>
                            <p> {joke.conent}</p>
                        </div>
                    )

                    )
                }
            </div>
        </>
    )
}

export default App
