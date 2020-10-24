import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./Quantity.scss";

const Quantity = (props) => {
  const { cant, setcant, handleChangeCant } = props;

  useEffect(() => {
    handleChangeCant();
  }, [cant]);

  return (
    <div>
      <div className="quantity-input">
        <button
          className="quantity-input__modifier quantity-input__modifier--left"
          onClick={(e) => {
            if (cant !== 1) {
              setcant(cant - 1);
            }
          }}
        >
          <RemoveIcon />
        </button>
        <input className="quantity-input__screen" value={cant} disabled/>
        <button
          className="quantity-input__modifier quantity-input__modifier--right"
          onClick={(e) => {
            setcant(cant + 1);
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
