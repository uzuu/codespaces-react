import React, { useState } from 'react' 

const Calbmi = () => {
    return (
        <div>
            <div >
                <h1>BMI Calculator</h1>
                 <hr></hr>
            </div>
            <div class="colinlinne">
                <p>Weight</p><input type="text" name="weight" placeholder='kg'></input>
            </div>
            <div class="colinlinne">
                <p>Height</p><input type="text" name="height" placeholder='meter'></input>
            </div>
        </div>
        
        
        
    );
}
 
export default Calbmi;