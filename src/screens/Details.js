import React, { useContext, Text, } from 'react';
import { RestaurantContext } from '../App';

export default function Details() {
  const { selectedRestaurant } = useContext(RestaurantContext);
  return <Text>{selectedRestaurant.name}</Text>
}