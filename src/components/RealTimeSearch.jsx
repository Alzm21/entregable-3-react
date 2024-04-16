import React, { useState } from 'react'


const RealTimeSearch = ({setResults}) => {

    const [input, setInput] = useState('')

    const fetchData = (value) => {
        fetch('https://rickandmortyapi.com/api/location')
        .then((res) => res.json())
        .then((json => {
            const results = json.results.filter((location) => {
                return (
                    value &&
                    location && 
                    location.name && 
                    location.name.toLowerCase().includes(value))
            })
            setResults(results)
        }))
        .catch((err) => {
            console.error('Error fetching data:', err)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

  return (
    <div>
        <input 
            type="text" placeholder='Type to search...'
            value={input}
            onChange={(item) => handleChange(item.target.value)}
        /> 
    </div>
  )
}

export default RealTimeSearch