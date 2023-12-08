import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MeanItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Frizza",
    description: "Finest fries and Pizza combo",
    price: 699.99,
  },
  {
    id: "m2",
    name: "Mint Margarita",
    description: "A Minty specialty!",
    price: 164.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Spicy, juicy, meaty",
    price: 999.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 279.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
