import React, { useEffect, useState } from 'react';
import './back.css';
import Detail from './Detail';
import Sags from './Sags';

function BacknEnd() {
    const [categordata, setCategordata] = useState([]);
    const [productdata, setProductdata] = useState([]);
    const [detaildata, setDetaildata] = useState();
    const [sagslasanbaaraa, setSagslasanbaaraa] = useState([]);
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
        setMode('list');
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
   const sags = () => {
        setMode('sags');
   }
   const sagslah = (sagsdata) => {
        setSagslasanbaaraa([...sagslasanbaaraa, sagsdata]);
        //console.log("sagsni baraa",sagslasanbaaraa);
   }
    

    
    return (<div>
                <body>
                <div className="conheader">
                    <div className="boxheader1"><h1>Back end</h1></div>
                    <div className="boxheader2" onClick={sags}><a>Carc</a></div>
                </div>
                <div>
                    <a onClick={proClick}> All product </a>
                </div>
                {mode  ==='list' && <div className="container">
                                        <div className="box1">
                                            
                                            {categordata.map(
                                                (data, i) => <ul>
                                                        <li><a onClick={() => onClickBox(data)}>{data}</a></li>
                                                    </ul>
                                            )}
                                        </div >
                                        <div className='box2' >
                                            {productdata.map(
                                                (data, i) =>
                                                <div className='productbox' onClick={()=>DetailClick(data.id)}>
                                                <img src={data.image} alt="" class="img"></img>
                                                <p>{data.title}</p>
                                                <p>{data.price}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>}
                    
                    {mode ==='detail' && <Detail cfunction={sagslah} data={detaildata}/>} 
                     {/* Detail companentruu  dataagaa damjuulna  */}
                     {mode ==='sags' && <Sags data={sagslasanbaaraa}/>} 
                     {/* Detail companentruu  dataagaa damjuulna  */}
                </body>
             </div>
    )
}
export default BacknEnd;