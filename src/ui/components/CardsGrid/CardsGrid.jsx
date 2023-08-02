import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import styles from "./styles.module.scss";
import Fireworks from "../../assets/animations/Fireworks";

const CardsGrid = ({ imagesList, score, userName, disabledFunc, handleOnClick, newGame }) => {
  return (
    <div className={styles.cards}>
      <>
        {imagesList ? (
          <>
            {score < 6 ? (
              <div className={styles.cards__grid}>
                {imagesList.map((image) => (
                  <Card
                    key={image.id}
                    {...image}
                    handleOnClick={() =>
                      disabledFunc && handleOnClick(image.id, image.imgId)
                    }
                  />
                ))}
              </div>
            ) : (
              <div className={styles.cards__message}>
                <div className={styles.cards__new}>
                  <p className={styles.cards__text}>Good job</p>
                  <h3 className={styles["cards__text--user"]}>{userName}</h3>
                  <Button text={"New game"} handleOnClick={() => newGame()} />
                </div>
                <Fireworks />
              </div>
            )}
          </>
        ) : (
          <Spinner />
        )}
      </>
    </div>
  );
};

CardsGrid.propTypes = {};

export default CardsGrid;
