import React from 'react';

const Sags = (props) => {
    const baraa= props.data;
    console.log(baraa);
    return <div>
        <h3>Таны сагс</h3>
        <body className='dbody'>
            <div className="detailbox">
                <div className="dbox1">
                    {baraa.map(
                        (data, i) =>
                        <div className='productbox'>
                            <img src={data.image} alt="" class="img"></img>
                            <p>{data.title}</p>
                            <p>{data.price}</p>
                        </div>
                    )}
                    
                </div >
                <div className="dbox2">
                    
                </div>
            </div>
        </body>
    </div>
}
 
export default Sags;