import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Button = ({ text, type, disabled, handleOnClick }) => {
  return (
    <>
      <button 
        className={styles.button}
        typeof={type}
        disabled={disabled}
        onClick={() => handleOnClick()}
      >
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.any,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

Button.defaultProps = {
  text: "button",
  type: "button",
  disabled: false,
  handleOnClick: () => false,
};

export default Button;
