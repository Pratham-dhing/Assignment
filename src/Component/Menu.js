import { useState } from "react";

function Menu() {
    
    const[text,setText] = useState("");
    const[activeTab,setActiveTab] = useState('');
    const handleChange = (e) =>{
        setActiveTab(e);
    }
    const handleText = (e) =>{
        setText(e);
    }

    const[text1,setText1] = useState("");

    const ShowButton=()=>{
        return(
        <div>
        <button onClick={()=>setText1("Selenium")}>Selenium</button>
        <button onClick={()=>setText1("Manul")}>Manual Testing</button>
        <button onClick={()=>setText1("DB")}>DB Testing</button>
        <button onClick={()=>setText1("Unit")}>Unit Testing</button>
        </div>
        )
    }
    const ShowButton1=()=>{
        return(
        <div>
        <button onClick={()=>setText1("Adv")}>Adv Java</button>
        <button onClick={()=>setText1("Core")}>Core Java</button>
        <button onClick={()=>setText1("Spring")}>Spring</button>
        <button onClick={()=>setText1("Hibernate")}>Hibernate</button>
        </div>
        )
    }
    const ShowButton2=()=>{
        return(
        <div>
        <button onClick={()=>setText1("C#")}>C#</button>
        <button onClick={()=>setText1("ASP")}>ASP.NET</button>
        <button onClick={()=>setText1("ADO")}>ADO.NET</button>
        <button onClick={()=>setText1("MVC")}>MVC</button>
        </div>
        )
    }
    const ShowButton3=()=>{
        return(
        <div>
        <button onClick={()=>setText1("Sql")}>SQL</button>
        <button onClick={()=>setText1("MySql")}>My SQl</button>
        <button onClick={()=>setText1("Oracle")}>Oracle</button>
        <button onClick={()=>setText1("H2")}>H2</button>
        </div>
        )
    }

    const [showExtraButtons,setExtraButtons]=useState(false);

    const [showExtraButtons1,setExtraButtons1]=useState(false);
    const handleShowButtons1 = () =>{
        setExtraButtons1(true);
    }

    const [showExtraButtons2,setExtraButtons2]=useState(false);
    const handleShowButtons2 = () =>{
        setExtraButtons2(true);
    }

    const [showExtraButtons3,setExtraButtons3]=useState(false);
    const handleShowButtons3 = () =>{
        setExtraButtons3(true);
    }
    const handleShowButtons = (tab) => {
    setExtraButtons(tab === "Testing");
    setExtraButtons1(tab === "Java");
    setExtraButtons2(tab === ".Net");
    setExtraButtons3(tab === "DataBase");
    };

    const bu = <button onClick={()=>{handleText("Text")}}>Testing</button>
    const bu1 = <button onClick={()=>{handleText("Text1")}}>Java</button>
    const bu2 = <button onClick={()=>{handleText("Text2")}}>.Net</button>
    const bu3 = <button onClick={()=>{handleText("Text3")}}>DataBase</button>

    const bu4 = <button onClick={() => handleShowButtons("Testing")}>Testing</button>
    const bu5 = <button onClick={() => handleShowButtons("Java")}>Java</button>
    const bu6 = <button onClick={() => handleShowButtons(".Net")}>.Net</button>
    const bu7 = <button onClick={() => handleShowButtons("DataBase")}>DataBase</button>

    return ( 
        <div>

            <button onClick={()=>{handleChange("Single-Menu")}}>Single Menus</button> 
            <button onClick={()=>{handleChange("Sub-Menu")}}>Sub Menus</button>

            <div>
                {activeTab === "Single-Menu" && <p>{bu} {bu1} {bu2} {bu3}</p>}
                {activeTab === "Sub-Menu" && <p>{bu4} {bu5} {bu6} {bu7}</p>}
            </div>

            <div>
                {text === "Text" && <p>You Have Selected Testing Menu Option.</p>}
                {text === "Text1" && <p>You Have Selected Java Menu Option.</p>}
                {text === "Text2" && <p>You Have Selected .Net Menu Option.</p>}
                {text === "Text3" && <p>You Have Selected DataBase Menu Option.</p>}
            </div>

            <div>
                {showExtraButtons && <ShowButton />}
                {showExtraButtons1 && <ShowButton1 />}
                {showExtraButtons2 && <ShowButton2 />}
                {showExtraButtons3 && <ShowButton3 />}
            </div>

            <div>
                {text1==="Selenium" && <p>You Have Selected Selenium Menu Option.</p>}
                {text1==="Manul" && <p>You Have Selected Manul Testing Menu Option.</p>}
                {text1==="DB" && <p>You Have Selected Db Testing Menu Option.</p>}
                {text1==="Unit" && <p>You Have Selected Unit Testing Menu Option.</p>}
            </div>

            <div>
                {text1==="Adv" && <p>You Have Selected Adv Java Option.</p>}
                {text1==="Core" && <p>You Have Selected Core Java Menu Option.</p>}
                {text1==="Spring" && <p>You Have Selected Spring Menu Option.</p>}
                {text1==="Hibernate" && <p>You Have Selected Hibernate Menu Option.</p>}
            </div>

            <div>
                {text1==="C#" && <p>You Have Selected C# Option.</p>}
                {text1==="ASP" && <p>You Have Selected ASP Option.</p>}
                {text1==="ADO" && <p>You Have Selected ADO Option.</p>}
                {text1==="MVC" && <p>You Have Selected MVC Menu Option.</p>}
            </div>

            <div>
                {text1==="Sql" && <p>You Have Selected Sql Option.</p>}
                {text1==="MySql" && <p>You Have Selected MySql Option.</p>}
                {text1==="Oracle" && <p>You Have Selected Oracle Option.</p>}
                {text1==="H2" && <p>You Have Selected H2 Option.</p>}
            </div>

        </div>
    );
}

export default Menu;