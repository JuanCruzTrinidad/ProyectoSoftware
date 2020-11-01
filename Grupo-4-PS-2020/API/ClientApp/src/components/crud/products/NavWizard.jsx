import React from "react";
import "./nav.css";

const NavWizard = (props) => {
  const dots = [];
  for (let i = 1; i <= props.totalSteps; i += 1) {
    const isActive = props.currentStep === i;
    dots.push(
      <span key={`step-${i}`} className={`dot ${isActive ? "active" : ""}`}>
        &bull;
      </span>
    );
  }

  return <div className=".nav">{dots}</div>;
};

export default NavWizard;
