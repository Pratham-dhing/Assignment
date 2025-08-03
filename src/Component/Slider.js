import { useState } from "react";
function Slider() {
  const [sliderValue, setSliderValue] = useState(3);
  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Slider</h2>

      <div style={{ marginTop: "20px", width: "300px" }}>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderValue}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>

      <p style={{ marginTop: "20px" }}>
        <strong>Current Slider Value:</strong> {sliderValue}
      </p>
    </div>
  );
}

export default Slider;