import React from "react";
import styles from "./FoodItems.module.css";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";

export default function FoodItems(props) {
  const foodData = useSelector((state) => state.menu);

  const errMsg = props.dataFetched ? (
    <h3 className="alertMsg">
      No food available right now, sorry for your inconvenience!
    </h3>
  ) : (
    <h3 className="alertMsg">
      Load failed. Please check your internet connection!
    </h3>
  );

  return (
    <ul className={styles.foodItems}>
      {foodData.length > 0
        ? foodData.map((food) => <FoodItem key={food.id} foodData={food} />)
        : errMsg}
    </ul>
  );
}
