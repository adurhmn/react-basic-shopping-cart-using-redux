import React from "react";
import styles from "./FoodItems.module.css";
import FoodItem from "./FoodItem";

export default function FoodItems(props) {
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
      {props.foodData.length > 0
        ? props.foodData.map((food) => (
            <FoodItem key={food.id} foodData={food} />
          ))
        : errMsg}
    </ul>
  );
}
