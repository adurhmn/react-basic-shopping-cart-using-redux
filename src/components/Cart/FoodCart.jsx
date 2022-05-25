import React, { Fragment } from "react";
import styles from "./FoodCart.module.css";
import btnStyles from "../../assets/css/button.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Total = function (props) {
  return (
    <div className={styles.total}>
      <div>
        <h1>Total Amount</h1>
      </div>
      <div>
        <h1 className={styles.totalPrice}>₹{props.totalPrice}</h1>
        <button
          className={`${btnStyles.btnPrimary} u-mg-r-small`}
          onClick={() => props.closeModal()}
        >
          Close
        </button>
        <button
          className={`${btnStyles.btnPrimary} ${btnStyles["btnPrimary--dark"]}`}
          onClick={props.order}
          disabled={props.totalPrice === 0}
        >
          Order
        </button>
      </div>
    </div>
  );
};

const FoodCart = function (props) {
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);
  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <h3 className="alertMsg">Nothing in cart!</h3>
      ) : (
        <ul className={styles.foodCart}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} itemInfo={item} />;
          })}
        </ul>
      )}

      <Total
        totalPrice={cartTotalPrice}
        closeModal={props.closeModal}
        order={props.order}
      />
    </Fragment>
  );
};

export default FoodCart;
