import React, { View, Text, Input, Button, useState, useEffect } from "react";

export default function AddNew() {
  const [restaurantName, setRestaurantName] = useState();
  const [address, setAddress] = useState();
  const [photo, setPhoto] = useState();
  const [rating, setRating] = useState(0);

  const NewRestaurant = {
    address: "420 TownCenter Road",
    name: "Tap 42",
    numRatings: 4,
    PhotoUrl:
      "https://bocacenter.com/wp-content/uploads/2015/12/infomain-tap-42.jpg",
    rating: 3.75,
  };
  const sendNewRestaurantInfo = () => {
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AddNew),
    });
  };

  useEffect(sendNewRestaurantInfo, [])

  return (
    <>
      <View>
        <Text> this is add new restaurants screen</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(text) => console.log(text)}
        />
        <Input
          placeholder="Address"
          onChangeText={(text) => setAddress(text)}
        />
        <Input placeholder="Photo" keyboardType="url" />
        <Input placeholder="Rating" keyboardType="numeric" maxLength="1" />
        <Button title="Create new restaurant" />
      </View>
    </>
  );
}
