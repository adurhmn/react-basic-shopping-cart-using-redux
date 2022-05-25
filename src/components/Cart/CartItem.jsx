import React from "react";
import styles from "./CartItem.module.css";
import btnStyles from "../../assets/css/button.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/sliceFoodCart";

const CartItem = function (props) {
  const dispatch = useDispatch();
  const { name, price, count, id } = props.itemInfo;

  return (
    <li className={styles.cartItem}>
      <div>
        <h2>{name}</h2>
        <span className={styles.price}>₹{price}</span>
        <span className={styles.count}>x{count}</span>
      </div>
      <div>
        <button
          className={`${btnStyles.btnSecondary} u-mg-r-small`}
          onClick={() => {
            dispatch(
              cartActions.removeItem({
                id,
                removeCount: 1,
                price,
                itemCount: count,
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
                addCount: 1,
                foodData: {
                  name,
                  price,
                  id,
                },
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
