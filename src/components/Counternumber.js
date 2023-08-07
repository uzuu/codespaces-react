/*
import React, { useState } from 'react' 
const Counternumber = () => {  //sfc shineer components uusgene
    
    let btnClass ='toggle-btn toggle-btn-on' ;
      
     //usf state uusgene
    const [countnum, setCountnum] = useState(0);
    const incrementClick = () => {
        // countNum =  countnum+1
        setCountnum(countnum+1)
         
    }
    
    const decrementClick = () => {
        setCountnum(countnum-1)
    }
   
    const resClick = () => {
        setCountnum(0);
    }

    console.log(countnum);
    return (
        <div>
            <div><h1>Counter App</h1></div>
            <div class="numbercount">{countnum}</div>
            <div class="container">
                <button onClick={incrementClick} className={btnClass}> Increment </button>
                <button onClick={decrementClick} className={btnClass}> Decrement</button>
                <button onClick={resClick} className={btnClass}> Reset </button>
            </div>
        </div>
    );
}
 
export default Counternumber;
*/
import React, { useState } from 'react'

const ToggleButton = (props) => {
    const { text, setText } = props

    // text OFF => ON
    // text ON => OFF
    const onClick = () => {
        const newText = text === 'ON' ? 'OFF' : 'ON'
        console.log("newText", newText)
        // text = newText
        setText(newText)
    }
    const toggleClass = text === 'ON' ? 'toggle-on' : 'toggle-off'
    return (
        <div>
            <button onClick={onClick} className={toggleClass}> {text} </button>
        </div>
    );
}

export default ToggleButton;















 import React, { useState } from 'react'

const ToggleButton = () => {
     const [buttonText, setButtonText] = useState("ON")
     const onClick = () => {
        const text = buttonText === 'ON' ? 'OFF' : 'ON'
         setButtonText(text)
     }
     let toggleClass = buttonText === 'ON' ? 'toggle-on' : 'toggle-off';
     return (
         <div>
             <button onClick={onClick} className={toggleClass}> {buttonText} </button>
         </div>
     );
 }
 
export default ToggleButton;