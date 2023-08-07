import React, { useState } from 'react';
import { InputNumber,Button} from 'antd';
import './ant.css'

const Ant1 = () =>  {
  const [sanasantoo, setSanasantoo] = useState(Math.floor(Math.random() * 100 + 1));
  const [urdun, setUrdun] = useState();
  const [utga, setUtga] = useState();
  const onChange = (value) => {
    console.log('changed', value);
    setUtga(value);
   }
  const taah = () =>
  { 
    if(utga > sanasantoo)
      setUrdun("Их байна")
    else if(utga === sanasantoo)
      setUrdun("Тоог олсон "+sanasantoo)
    else
      setUrdun("Бага байна")
  }
  
      return (<div>
        <body>
          <h1>Санасан тоо хэд вэ?</h1>
          <h2>1-100-н хооронд  байгаа тоог таагаарай</h2>
          <InputNumber min={1} max={100}   defaultValue={0} onChange={onChange} />
          <Button type="primary" onClick={taah} >Таах</Button>
          <h3>{urdun}</h3>
        </body> 
        </div>
        
      )
    }
export default Ant1;