import React, { useContext } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { RestaurantContext } from '../App'

export default function Home() {
	const { restaurants } = useContext(RestaurantContext)

	return (
		<>
			{/* <ul> */}
			{!restaurants ? (
				<h1>loading...</h1>
			) : ( <div>
				{restaurants.map((restaurant) => {
					return <RestaurantCard key={restaurant.id} data={restaurant} />
				})}
				</div>
			)}
			{/* </ul> */}
		</>
	)
}