import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Card = ({ open, id, title, url, handleOnClick }) => {
  return (
    <>
      {open ? (
        <div key={id} className={styles.card__front} data-testid={"card-front"}>
          <img className={styles.card__img} src={url} alt={title} />
        </div>
      ) : (
        <div
          key={id}
          className={styles.card__back}
          onClick={() => handleOnClick()}
          data-testid={"card-back"}
        ></div>
      )}
    </>
  );
};

Card.propTypes = {
  open: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  handleOnClick: PropTypes.func,
};

Card.defaultProps = {
  open: false,
  id: "id",
  title: "Image",
  url: "",
  handleOnClick: () => false,
};

export default Card;
