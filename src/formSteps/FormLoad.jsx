// IMPORTS
//-------------------------------------------------------------------------------------------------------import React, { useState } from "react";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import React from "react";
import "ldrs/ripples";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function FormLoad() {
  // Return Statement ---------------------------------------------------
  return (
    <div className="form-div-main">
      <div className="load-content">
        <l-ripples
          size="90"
          speed="2"
          color="purple"
          className="debug"
        ></l-ripples>
        <i className="mt-4">Loading your results...</i>
      </div>
    </div>
  );
}

// Export
export default FormLoad;
