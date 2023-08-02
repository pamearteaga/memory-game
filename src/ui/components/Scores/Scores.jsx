import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Scores = ({ right, wrong }) => {
  return (
    <div className={styles.scores} data-testid={"scores"}>
      <p className={styles.scores__text}>Scores:</p>
      <p className={styles.scores__right}>Right {right}</p>
      <p className={styles.scores__text}>|</p>
      <p className={styles.scores__wrong}>Wrong {wrong}</p>
    </div>
  );
};

Scores.propTypes = {
  right: PropTypes.number,
  wrong: PropTypes.number,
};

Scores.defaultProps = {
  right: 0,
  wrong: 0,
};

export default Scores;
