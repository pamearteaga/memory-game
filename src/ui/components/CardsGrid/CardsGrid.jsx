import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import styles from "./styles.module.scss";

const CardsGrid = ({ imagesList, score, userName, handleOnClick }) => {
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
                    handleOnClick={() => handleOnClick(image.id, image.imgId)}
                  />
                ))}
              </div>
            ) : (
              <div>
                <p>Good job {userName}!</p>
                <Button text={"New game"} />
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