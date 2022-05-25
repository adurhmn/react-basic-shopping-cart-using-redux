import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

export default function Header(props) {
  // // console.log(props);
  const [bubbleAdded, setBubbleAdded] = useState(false);
  const cartCount = useSelector((state) => state.cart.cartTotalCount);

  useEffect(() => {
    // adds animation class after component is rendered (to see it in every rerender)
    setBubbleAdded(true);

    // removes the animation class from cart once animation is completed
    const bubbleTimer = setTimeout(() => {
      setBubbleAdded(false);
    }, 200);

    // clean up function
    return () => {
      clearInterval(bubbleTimer);
    };
  }, [cartCount]);

  const cartClass = `${styles.cart} ${bubbleAdded ? styles.bubbleUp : ""}`;
  // console.log(cartClass);

  return (
    <header className={styles.header}>
      <span className="logo">AbdurMeals</span>
      <div className={cartClass} onClick={props.openModal}>
        <span>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <span>Your Cart</span>
        <span className={styles.cart__total}>{cartCount}</span>
      </div>
    </header>
  );
}
