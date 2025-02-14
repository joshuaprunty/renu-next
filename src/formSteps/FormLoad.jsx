// IMPORTS
//-------------------------------------------------------------------------------------------------------import React, { useState } from "react";
import { useState, useEffect } from "react";
import React from "react";
import "ldrs/ripples";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function FormLoad() {
  // Return Statement ---------------------------------------------------
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-full flex flex-col justify-center items-center">
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

export default FormLoad;