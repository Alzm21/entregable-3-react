import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationData from './components/LocationData'
import ResidentCard from './components/ResidentCard'
/* import RealTimeSearch from './components/RealTimeSearch'
import SearchResults from './components/SearchResultList' */
import WelcomePage from './components/WelcomePage'
import { FaSearch } from 'react-icons/fa'



function App() {

  const [inputValue, setInputValue] = useState(Math.floor(Math.random()*126)+1)
  const [locations, getLocations, isLoading, hasError] = useFetch()
  const [results, setResults] = useState([])
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`
    getLocations(url)
    
  }, [inputValue])

  const textInput = useRef()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue(textInput.current.value.toLowerCase().trim())
    textInput.current.value = ''
  }

  const handleWelcome = () => {
    setShowWelcome(false)
  }
  
/*     console.log(locations) */
  return (
    <>
    {
      isLoading ? <h2>LOADING...</h2>
      :
      <div className='app'>
        <WelcomePage isOpen={showWelcome} onClose={handleWelcome}/>
        <div className='pageBanner'></div>
        <form className='app_form' onSubmit={handleSubmit}>
          <input className='app_input' type="text" ref={textInput}/>
          <button className='app_btn'>Search</button>
        <FaSearch />
        </form>

        {
          hasError || inputValue === '0 ' ? 
          <h2>{'Hey!! You must provide an id from 1 to 126 :('}</h2>
          :
          <>
            {/* <div>
              <RealTimeSearch 
                setResults = {setResults}/>
              <SearchResults 
                results = {results}
              />
            </div> */}
            <LocationData
              locations = {locations}
            />
            <div className='app_container'>
              {
                locations?.residents.map(resident => (
                  <ResidentCard
                    key = {resident}
                    url = {resident}
                  />
                ))
              }
            </div>
          </>
        }
      </div>
    }
    </>
  )
}

export default App
