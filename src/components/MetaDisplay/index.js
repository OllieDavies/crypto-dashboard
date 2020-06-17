import React from "react";

const MetaDisplay = ({ name, value, children }) => (
  <div>
    <p>
      <strong>{name}:</strong> {value || children}
    </p>
  </div>
);

export default MetaDisplay;
