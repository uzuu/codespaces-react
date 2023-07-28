import React, { useState } from 'react'
const ToggleBtn = () => {
    // const btnText = "ON"
    const [btnText, setBtnText] = useState("ON");
    const onClick = () => {
        console.log("Button clicked")
        // ON => OFF
        // OFF => ON
        if (btnText === 'ON')
            // btnText = "OFF"
            setBtnText("OFF")
        else setBtnText("ON")
    }
    let btnClass = btnText === 'ON' ? 'toggle-btn toggle-btn-on' : 'toggle-btn';
    return (
        <div>
            <button onClick={onClick} className={btnClass}> {btnText} </button>
        </div>
    );
}

export default ToggleBtn;