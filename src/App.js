import React, { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import Details from './screens/Details'

export const RestaurantContext = createContext()

function App() {
	const [restaurants, setRestaurants] = useState()

 useEffect (() => {
		fetch('https://bocacode-intranet-api.web.app/restaurants')
			.then((res) => res.json())
			// .then((data) => console.log(data))
			.then((data) => {
				// console.log(data)
				setRestaurants(data)
			})
			.catch(console.error)
	}, [])

  
  return (
		<>
    <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
			<Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:restId' element={<Details />}/>
      </Routes>
    </RestaurantContext.Provider>
		</>
	)
}

export default App