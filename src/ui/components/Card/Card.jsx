import React from "react";
import PropTypes from "prop-types";
//import styles from './styles.module.scss'

const Card = ({ open, id, title, url, handleOnClick }) => {
  return (
    <>
      {open ? (
        <div key={id} className="h-44 w-full overflow-hidden">
          <img className="object-cover" src={url} alt={title} />
        </div>
      ) : (
        <div key={id} className="h-44 w-full bg-grey-light1 shadow" onClick={() => handleOnClick()}></div>
      )}
    </>
  );
};

/* Card.propTypes = {} */

export default Card;
