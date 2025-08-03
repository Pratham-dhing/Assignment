import React from "react";

function Frame() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Frame One</h2>

      <iframe
        title="Frame Two"
        src="https://jalatechnologies.com"
        style={{
          width: "400px",
          height: "200px",
          border: "1px solid gray",
          overflow: "auto",
        }}
      />

      <h2>Frame Three</h2>
    </div>
  );
}

export default Frame;
