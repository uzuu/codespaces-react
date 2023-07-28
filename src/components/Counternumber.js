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