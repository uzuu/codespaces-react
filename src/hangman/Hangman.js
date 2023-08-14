import React, { useState } from 'react'
const Hangman = () => {
    const words = ["kangoroo", "apple", "banana", "dog"] //Таах үгнүүд
    const randomNumber = Math.floor(Math.random() * words.length); // words уртаар random number oloh
    const [word, setWord] = useState(words[randomNumber]) // words-s randomoor word songono
    const [input, setInput] = useState(""); // oroltin ugugdul string type
    const [buruuHariulsanToo, setBuruuHariulsanToo] = useState(1); // buruu hariulsan toog hadgalah state
    const [zuvTaasan, setZuvTaasan] = useState([]); // zuw taasan usgiig hadgalsan   state massive type
    const [hojigdson, setHojigdson] = useState(false); // hojigsonig hadgalah shalgah state boolean type

    const onChangeInput = (e) => {
        const text = e.target.value // input dotor bichsen ugtiig text dotor ugnu
        setInput(text)
    }
    const onClickBtn = () => {
        if (word.includes(input)) { // include ashiglah tuhain massivaas input baigaag ni shalgana
            // Үсэг байна
            setZuvTaasan([...zuvTaasan, input]) // zuw taasan bol zuvtaasan massived deer inputin utgiig nemj bichne
            
        }
        else
        {
          const buruuHariult = buruuHariulsanToo + 1
              // Үсэг байхгүй
              setBuruuHariulsanToo(buruuHariult); // buruu hariulsan too
              
              if (buruuHariult > 7) { // buruu hariult bolbol Hojigdson statin utgiig uurchilnu
                  setHojigdson(true)
              }
        }
        setInput("")
    }
    // ["b","a"]
    // Тэмдэг үгийг массив болгож байна "dog" => ["d","o","g"]
    const wordArray = word.split("")
    const maskedWord = wordArray.map(useg => { 
        if (zuvTaasan.includes(useg)) // zuw taasan esehig shalgana
            return useg // usgiig hewlene
        else return " _ " // buruu bol hewlene
    })
    // /fdgf
    const hojsonuu = !maskedWord.includes(" _ ") // hojson esehig shalgana

    const zurag = 'img/' + buruuHariulsanToo + ".jpg" // zuragni bairshil nerig uurchlunu
    return (<div>
        {hojsonuu && <h1>Та хожлоо баяр хүргье</h1>} 
        
        {hojigdson ?
            <h1>Та хожигдлоо</h1> : //dfgdfgjg
            <div>
                <img src={zurag} width={150} height={150} /> 
                {/* fsdfdsfdffdf */}
                <p> {maskedWord.map(useg => useg)} </p>
                <input value={input} onChange={onChangeInput} placeholder='Үсэг оруулна уу' />                 <button onClick={onClickBtn}>Шалгах</button>
            </div>
        }


    </div>);
}

export default Hangman;