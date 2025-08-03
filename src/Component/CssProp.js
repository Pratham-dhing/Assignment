import { useState } from "react";

function CssProp() {
    const[activeTab,setActiveTab]=useState('');
    const handleChange=(e)=>{
        setActiveTab(e);
    }
    const l1 = <a href="http://www.growictech.com/" target="_blank">Link 1</a>
    const l2 = <a href="https://www.linkedin.com/uas/login" target="_blank">Link 2</a>
    const l3 = <a href="https://www.google.com/" target="_blank">Link 3</a>
    const l4 = <a href="https://www.growictech.com:2096/" target="_blank">Link 4</a>
    const l5 = <a href="https://www.restapitutorial.com/httpstatuscodes" target="_blank">Link 5</a>
    const d1 = <span>Default</span>;
    const d2 = <span style={{ backgroundColor: "blue", color: "white", padding: "4px 8px", margin: "4px", borderRadius: "4px"}}>Primary</span>;
    const d3 = <span style={{ backgroundColor: "green", color: "white", padding: "4px 8px", margin: "4px", borderRadius: "4px" }}>Success</span>;
    const d4 = <span style={{ backgroundColor: "lightblue", color: "black", padding: "4px 8px", margin: "4px", borderRadius: "4px" }}>Info</span>;
    const d5 = <span style={{ backgroundColor: "orange", color: "black", padding: "4px 8px", margin: "4px", borderRadius: "4px" }}>Warning</span>;
    const d6 = <span style={{ backgroundColor: "red", color: "white", padding: "4px 8px", margin: "4px", borderRadius: "4px" }}>Danger</span>;
    const b1 = <button>Default</button>;
    const b2 = <button style={{ backgroundColor: "blue", color: "white", borderRadius: "4px" }}>Primary</button>;
    const b3 = <button style={{ backgroundColor: "green", color: "white",  borderRadius: "4px" }}>Success</button>;
    const b4 = <button style={{ backgroundColor: "lightblue", color: "black",  borderRadius: "4px" }}>Info</button>;
    const b5 = <button style={{ backgroundColor: "orange", color: "black",  borderRadius: "4px" }}>Warning</button>;
    const b6 = <button style={{ backgroundColor: "red", color: "white",  borderRadius: "4px" }}>Danger</button>;

    const [visible, setVisible] = useState({
    success: true,
    info: true,
    warning: true,
    danger: true,
    });

    const closeAlert = (type) => {
    setVisible((prev) => ({ ...prev, [type]: false }));
    };

    const alertStyle = (bgColor, textColor) => ({
    backgroundColor: bgColor,
    color: textColor,
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px"
    });

    const crossStyle = {
        float: "right",
        cursor: "pointer",
        fontWeight: "bold"
    };


    return ( 
        <div>
            <button onClick={()=>{handleChange("Links")}}>Links</button>
            <button onClick={()=>{handleChange("Lables")}}>Lables</button>
            <button onClick={()=>{handleChange("Buttons")}}>Buttons</button>
            <button onClick={()=>{handleChange("Alerts")}}>Alerts</button>
            <button onClick={()=>{handleChange("Progress")}}>Progress Bars</button>

        <div>
            {activeTab==="Links" && <p>{l1} {l2} {l3} {l4} {l5}</p>}
            {activeTab==="Lables" && <p>{d1}{d2}{d3}{d4}{d5}{d6}</p>}
            {activeTab==="Buttons" && <p>{b1}{b2}{b3}{b4}{b5}{b6}</p>}
            {activeTab==="Alerts" && (
                    <>
                        {visible.success && <div style={alertStyle("green", "white")}>
                            <strong>Success!</strong> This is a success alert.
                            <button style={crossStyle} onClick={() => closeAlert("success")}>×</button>
                        </div>}
                        {visible.info && <div style={alertStyle("lightblue", "black")}>
                            <strong>Info!</strong> This is an info alert.
                            <button style={crossStyle} onClick={() => closeAlert("info")}>×</button>
                        </div>}
                        {visible.warning && <div style={alertStyle("orange", "black")}>
                            <strong>Warning!</strong> This is a warning alert.
                            <button style={crossStyle} onClick={() => closeAlert("warning")}>×</button>
                        </div>}
                        {visible.danger && <div style={alertStyle("red", "white")}>
                            <strong>Danger!</strong> This is a danger alert.
                            <button style={crossStyle} onClick={() => closeAlert("danger")}>×</button>
                        </div>}
                    </>
                )}
            {activeTab==="Progress" && (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "80%", margin: "10px 0" }}>
    <div style={{ backgroundColor: "#eee", borderRadius: "10px", height: "20px" }}>
      <div style={{ width: "50%", backgroundColor: "blue", height: "100%", borderRadius: "10px" }}></div>
    </div>

    <div style={{ backgroundColor: "#eee", borderRadius: "10px", height: "20px" }}>
      <div style={{ width: "70%", backgroundColor: "green", height: "100%", borderRadius: "10px" }}></div>
    </div>

    <div style={{ backgroundColor: "#eee", borderRadius: "10px", height: "20px" }}>
      <div style={{ width: "60%", backgroundColor: "orange", height: "100%", borderRadius: "10px" }}></div>
    </div>

    <div style={{ backgroundColor: "#eee", borderRadius: "10px", height: "20px" }}>
      <div style={{ width: "80%", backgroundColor: "red", height: "100%", borderRadius: "10px" }}></div>
    </div>

  </div>
)}
        </div>
        </div>
    );
}

export default CssProp;