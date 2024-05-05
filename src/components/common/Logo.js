import React from "react";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";

const Logo = ({ isFocusedMode, isMusicMode }) => {
  return (
    <div className="header" style={{visibility: isFocusedMode ? 'hidden' : 'visible' }}>
      <h1>
        Type Code <KeyboardAltIcon fontSize="large" />
      </h1>
      <span className="sub-header">
        Coding Made Tangible, Typing Made Fun
      </span>
    </div>
  );
};

export default Logo;
