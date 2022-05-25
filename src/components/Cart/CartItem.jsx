import React from "react";
import styles from "./CartItem.module.css";
import btnStyles from "../../assets/css/button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/sliceFoodCart";

const CartItem = function (props) {
  const foodData = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <li className={styles.cartItem}>
      <div>
        <h2>{props.itemInfo.name}</h2>
        <span className={styles.price}>₹{props.itemInfo.price}</span>
        <span className={styles.count}>x{props.itemInfo.count}</span>
      </div>
      <div>
        <button
          className={`${btnStyles.btnSecondary} u-mg-r-small`}
          onClick={() => {
            dispatch(
              cartActions.removeItem({
                id: props.itemInfo.id,
                count: 1,
              })
            );
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button
          className={btnStyles.btnSecondary}
          onClick={() => {
            dispatch(
              cartActions.addItem({
                id: props.itemInfo.id,
                count: 1,
                foodData,
              })
            );
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
