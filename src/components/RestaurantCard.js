import React from "react";


export default function RestaurantCard({ data }) {
	return (
		<>
			<img src={data.photoUrl} alt='restaurant'/>
			<h2>{data.name}</h2>
			<h3>{data.rating}</h3>
		</>
	)
}