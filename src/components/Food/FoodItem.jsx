import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/sliceFoodCart";
import styles from "./FoodItem.module.css";

export default function FoodItem(props) {
  const { name, desc, price, id } = props.foodData;
  const countInput = useRef();
  const foodData = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <li className={styles.foodItem}>
      <div>
        <h2>{name}</h2>
        <p className="italic">{desc}</p>
        <span className={styles.price}>₹{price}</span>
      </div>
      <div>
        <span className={styles.countLabel}>Count</span>
        <input
          className={styles.input}
          type="number"
          defaultValue={1}
          max="10"
          min="1"
          ref={countInput}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(
              cartActions.addItem({
                id,
                count: +countInput.current.value,
                foodData,
              })
            );
          }}
        >
          <i className="fa-solid fa-plus"></i>&nbsp; Add
        </button>
      </div>
    </li>
  );
}
