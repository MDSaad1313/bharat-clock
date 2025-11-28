import React from "react";
function displayTime() {
  const d = new Date().toLocaleString();
  return (
    <div>
      <h2>This is the current Date And time : {d} </h2>
    </div>
  );
}

export default displayTime;
