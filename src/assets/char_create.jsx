import { useState } from "react";
import {Link} from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import "../App.css"

function Creator(){
    const [selectorCounter, setSelectorCounter] = useState(0);
    const [isChecked1, setisChecked1] = useState(false);
    const [isChecked2, setisChecked2] = useState(false);
    const [isChecked3, setisChecked3] = useState(false);


    async function send_stats() {
        var response = await invoke("try_register", {danio: isChecked1, vida: isChecked2, mana: isChecked3});
        setRegisterState(response);
    }

    function checkBox(box_number){
        switch(box_number){
            case 1:
                if(isChecked1 == true){
                    setSelectorCounter(selectorCounter - 1);
                } else {
                    setSelectorCounter(selectorCounter + 1);
                }
                setisChecked1(!isChecked1);
                break 
            case 2:
                if(isChecked2 == true){
                    setSelectorCounter(selectorCounter - 1);
                } else {
                    setSelectorCounter(selectorCounter + 1);
                }
                setisChecked2(!isChecked2);
                break 

            case 3:
                if(isChecked3 == true){
                    setSelectorCounter(selectorCounter - 1);
                } else {
                    setSelectorCounter(selectorCounter + 1);
                }
                setisChecked3(!isChecked3);
                break 
        }       

    }

    const handleFirstBox = () => { isChecked1 == false && selectorCounter == 2? null : checkBox(1)};
    const handleSecondBox = () => {isChecked2 == false && selectorCounter == 2? null : checkBox(2)};
    const handleThirdBox = () => {isChecked3 == false && selectorCounter == 2? null : checkBox(3)};

    return(
        <div className="container">
            Un punto base para cada estadistica y te ofrecemos dos adicionales para que repartas
            <input type="checkbox" id="stat1" name="stat1" value="danio" checked={isChecked1} onChange={handleFirstBox}/>
            <label htmlFor="stat1"> Danio</label><br/>
            <input type="checkbox" id="stat2" name="stat2" value="vida" checked={isChecked2} onChange={handleSecondBox}/>
            <label htmlFor="stat2"> Vida</label><br/>
            <input type="checkbox" id="stat3" name="stat3" value="mana" checked={isChecked3} onChange={handleThirdBox}/>
            <label htmlFor="stat3"> Mana</label><br/>
            <button onClick={()=>send_stats()}>Terminar</button>
        </div>
    );
}

export default Creator;

