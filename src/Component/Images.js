import { useState } from "react";

function Images() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleUpload = () => {
    if (file && fileName) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, { name: fileName, dataUrl: reader.result }]);
        setFile(null);
        setFileName("");
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a file and enter a name.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Uploading/Downloading Image</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Select File: </label>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>File Name: </label>
        <input
          type="text"
          value={fileName}
          onChange={handleNameChange}
          placeholder="Enter file name"
        />
        <button onClick={handleUpload} style={{ marginLeft: "10px", background: "green", color: "white" }}>
          Upload
        </button>
      </div>

      <h3>List Of Images:</h3>
      <div>
        {images.map((img, idx) => (
          <div key={idx} style={{ marginBottom: "10px" }}>
            <strong>{img.name}</strong>
            <br />
            <img src={img.dataUrl} alt={img.name} width={200} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;