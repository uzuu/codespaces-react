import React, { useState } from 'react';



function Detail(props) {
    const baraa= props.data;
    
    const sagslah = (baraa) => {
        //console.log(baraa);
       props.cfunction(baraa)
    }
    return <div >
        <body className='dbody'>
            <div className="detailbox">
                <div className="dbox1">
                    <h3>{baraa.title}</h3>
                    <img src={baraa.image} alt="" className="detailimg"></img>
                </div >
                <div className="dbox2">
                    <p>Үнэ</p>
                    <h2>{baraa.price}</h2>
                    <button className="cbutton" onClick={()=>{sagslah(baraa)}}>САГСАНД НЭМЭХ</button>
                </div>
            </div>
        </body>
    </div>
  }
  export default Detail;