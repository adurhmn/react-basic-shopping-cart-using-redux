import React, { useState, useReducer, useEffect } from "react";
import "./assets/css/global.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import BodyWrapper from "./components/UI/BodyWrapper";
import FoodItems from "./components/Food/FoodItems";
import Modal from "./components/Cart/Modal";
import ModalContent from "./components/Cart/ModalContent";

const App = function () {
  const [foodData, setFoodData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataFetchFailed, setDataFetchFailed] = useState(false);

  useEffect(() => {
    fetch(
      "https://react-project-7ced2-default-rtdb.firebaseio.com/meal-data.json"
    )
      .then((res) => res.json())
      .then((data) => setFoodData(data["-N1mh71Dhy5vFrQyecZh"]))
      .catch(() => setDataFetchFailed(true));
  }, []);

  return (
    <React.Fragment>
      <Header openModal={() => setModalIsOpen(true)} />
      {modalIsOpen && (
        <Modal closeModal={() => setModalIsOpen(false)}>
          <ModalContent closeModal={() => setModalIsOpen(false)} />
        </Modal>
      )}
      <BodyWrapper>
        <FoodItems foodData={foodData} dataFetched={!dataFetchFailed} />
      </BodyWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default App;
