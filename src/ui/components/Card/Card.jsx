import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss'

const Card = ({ open, id, title, url, handleOnClick }) => {
  return (
    <>
      {open ? (
        <div key={id} className={styles.card__front}>
          <img className={styles.card__img} src={url} alt={title} />
        </div>
      ) : (
        <div key={id} className={styles.card__back} onClick={() => handleOnClick()}></div>
      )}
    </>
  );
};

/* Card.propTypes = {} */

export default Card;
