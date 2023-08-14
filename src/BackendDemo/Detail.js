import React from 'react';

function Detail(props) {
    const baraa= props.data;
    console.log(baraa);
    return <div>
        <img src={baraa.image} alt="" class="img"></img>
        <p>{baraa.title}</p>
        <p>{baraa.price}</p>
    </div>
  }
  export default Detail;