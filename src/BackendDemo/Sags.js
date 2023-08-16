import React from 'react';

const Sags = (props) => {
    const baraa= props.data;
    console.log(baraa);
    const une=0;
    
     
    return <div>
        <h3>Таны сагс</h3>
        <body className='dbody'>
            <div className="detailbox">
                <div className="sbox1">
                    {baraa.map(
                        (data, i) =>
                        <div className='sagsbox'>
                            <div className='sagsbox1'><img src={data.image} alt="" class="imgsags"></img></div>
                            <div className='sagsbox1'><p>{data.title}</p></div>
                            <div className='sagsbox1'><p>{data.price}</p></div>
                        </div>
                    )}
                    
                </div >
                <div className="sbox2">
                    <h3>Төлбөрийн мэдээлэл</h3>
                    <p>Бүтээгдэхүүн</p>
                    <div className='unebox'>
                        {
                            baraa.map(
                                (data) =>
                                <div>
                                    <p>{data.title}</p><p>{data.price}</p>
                                </div>
                            )
                        }
                    </div>
                    
                </div>
                
            </div>
        </body>
    </div>
}
 
export default Sags;