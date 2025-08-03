import { useState } from "react";
import LinkedInImage from "./images.png";
import GoogleImage from "./png-clipart-google-logo-google-logo-google-search-icon-google-text-logo-thumbnail.png";
import JalaTec from "./ff80808163b94f4e0163c3f82938032b-large.png";
import Growic from "./images.jpeg"

function Links() {
    const[activeTab,setActiveTab] = useState('');
    const handleChange = (e) =>{
        setActiveTab(e);
    }
    const Work = <a href="https://www.workinglinks.co.uk/" target="_blank">Link 1</a>
    const w2 = <a href="https://www.google.com/" target="_blank">Link 2</a> 
    const w3 = <a href="https://jalatechnologies.com/" target="_blank">Link 3</a>

    const w4 = <a href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/" target="_blank">Link 1</a>
    const w5 = <a href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/" target="_blank">Link 2</a> 
    const w6 = <a href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/" target="_blank">Link 3</a>

    const w7 = (
    <a href="https://www.linkedin.com/uas/login" target="_blank" rel="noopener noreferrer">
    <img src={LinkedInImage} alt="LinkedIn"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer"}}>
    </img>
    </a>
    );

    const w8 = (
    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
    <img src={GoogleImage} alt="LinkedIn"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer"}}>
    </img>
    </a>
    );

    const w9 = (
    <a href="https://jalatechnologies.com/" target="_blank" rel="noopener noreferrer">
    <img src={JalaTec} alt="LinkedIn"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer"}}>
    </img>
    </a>
    );

    const w10 = (
    <a href="http://www.growictech.com/" target="_blank" rel="noopener noreferrer">
    <img src={Growic} alt="LinkedIn"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer"}}>
    </img>
    </a>
    );

    const w11 = <a href="https://www.restapitutorial.com/httpstatuscodes" target="_blank" style={{color:"green"}}>200</a> 
    const w12 = <a href="https://www.google.com/" target="_blank" style={{color:"blue"}}>301</a> 
    const w13 = <a href="https://www.google.com/" target="_blank" style={{color:"red"}}>404</a> 
    const w14 = <a href="https://www.google.com/" target="_blank" style={{color:"red"}}>500</a> 

    return ( 
        <div>
        <button onClick={()=>{handleChange("Working")}}>Working Links</button>
        <button onClick={()=>{handleChange("Broken")}}>Broken Links</button>
        <button onClick={()=>{handleChange("Images")}}>Image Links</button>
        <button onClick={()=>{handleChange("Status")}}>Status Links</button>
        
        <div>
            {activeTab===("Working") && <p>{Work} {w2} {w3}</p>}
            {activeTab===("Broken") && <p>{w4} {w5} {w6}</p>}
            {activeTab===("Images") && <p>{w7} {w8} {w9} {w10}</p>}
            {activeTab===("Status") && <p>{w11} {w12} {w13} {w14}</p>}
        </div>

        </div>
    );
}

export default Links