import React, { useEffect, useState } from 'react';
import './back.css';
import Detail from './Detail';


function BacknEnd() {
    const [categordata, setCategordata] = useState([]);
    const [productdata, setProductdata] = useState([]);
    const [detaildata, setDetaildata] = useState();
    // detail
    const [mode, setMode] = useState('list');
    useEffect(()=>{ //buh code 1 udaa ehendee ajillana
    //   mount
    caClick()
    proClick()
    },[])
    const caClick = async () => {
        const response = await fetch("https://fakestoreapi.com/products/categories"); // back end beldsen file
        const data = await response.json(); //response json function ashiglan array bolgoj datad ugnu
       // console.log(data);
        setCategordata(data)
    }
    const proClick = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
      //  console.log(data);
        setProductdata(data);
    }
    const onClickBox = async (categ) => {
        const response = await fetch("https://fakestoreapi.com/products/category/"+categ);
        const data = await response.json();
        //console.log(data);
        setProductdata(data);
    }
   const DetailClick = async(id) => {
        const response = await fetch("https://fakestoreapi.com/products/"+id);
        const data = await response.json();
        setDetaildata(data);
        setMode('detail');
   }
    
    return (<div>

                    <h1>Back end</h1>
                <body>
                    <div className="container">
                        <div className="box1">
                            <button onClick={proClick}>All product</button>
                            {categordata.map(
                                (data, i) => <ul>
                                        <li><a onClick={() => onClickBox(data)}>{data}</a></li>
                                    </ul>
                            )}
                        </div >
                        <div className='box2' >
                            {mode  ==='list' && productdata.map(
                                (data, i) =>
                                <div className='productbox' onClick={()=>DetailClick(data.id)}>
                                <img src={data.image} alt="" class="img"></img>
                                <p>{data.title}</p>
                                <p>{data.price}</p>
                                </div>
                            ) }
                            {mode ==='detail' && <Detail data={detaildata}/>} 
                         {/* Detail companentruu  dataagaa damjuulna  */}
                        </div>
                    </div>
                </body>
             </div>
    )
}
export default BacknEnd;