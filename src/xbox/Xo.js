import React, { useState } from 'react'


const TicTac = () => {
    // 1. UI => Component   => OK
    // 2. Dynamic rendering => OK
    const [boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', '',]);
    // Өмнөх дарагдсан утга
    const [prevValue, setPrevValue] = useState('X');
    const [winner, setWinner] = useState();
    // 3. Click => X O    => OK
    // Box байрлал => OK,  өмнөх утга хадгалах хувьсагч => OK
    // Х 0 -с аль утгийг сонгохыг  өмнөх утга хадгалах хувьсагч зарлана
    // Товч дарах үед тухайн хувьсагчаа ашиглаад 
    // тохирох утгийг дэлгэцэнд харуулна 
    const onClickBox = (i) => {
        if (boxes[i] || winner) return;
        // Box байрлал => OK
        // console.log("i=", i)
        const nextValue = prevValue === 'X' ? 'O' : 'X'
        console.log('nextValue', nextValue, prevValue)
        // ['', '', 'X', '', '', '', '', '', '',]
        boxes[i] = nextValue
        // setBoxes(['', '', 'X', '', '', '', '', '', '',])
        setBoxes(boxes)

        checkWinner(boxes);
        setPrevValue(nextValue)
    }

    // 4. Row check
    // 5. Column check
    // 6. Diagonal check
    const checkWinner = (boxes) => {
        // ['0', '', 'X', '', '', '', '', '', '',]
        let result;
        // 1.Row
        for (let i = 0; i <= 8; i += 3) {
            if (boxes[i] === boxes[i + 1] && boxes[i + 1] === boxes[i + 2])
                result = boxes[i]
            if (result) break;
        }
        for (let i = 0; i <= 2; i ++) {
            if (boxes[i] === boxes[i + 3] && boxes[i + 3] === boxes[i + 6])
                result = boxes[i]
            if (result) break;
        }
    
        if (boxes[0] === boxes[4] && boxes[4] === boxes[8])
        {
            result = boxes[0];
        }
        if (boxes[2] === boxes[4] && boxes[4] === boxes[6])
        {
            result = boxes[2];
        }
        

        console.log("RESULT = ", result)
        if (result)
            // 7. Display winner
            setWinner(result)
        // 2.Col
        // 3.Diagonal
    }

    console.log('winner', winner)
    return (
        <div>
            
          {winner ? <h1>{winner} is winner</h1> : ''}
            <div className='container'>
                {boxes.map(
                    (box, i) =>  <button onClick={() => onClickBox(i)} className='box'>{box}</button>
                )}
            </div>
        </div>
    );
}

export default TicTac;