import { useState } from "react";
import { token } from '../../components/keysntokens'

export default function AirtableUpdate({ stockDataSingle, position, setPosition, stocksDB, setstocksDB }) {

    const [errorMsgUpdate, setErrorMsgUpdate] = useState('');

    let updatedPosition = '';
    const handleUpdateChange = (event) => {
        event.preventDefault();
        updatedPosition = event.target.value;
        console.log('position input is being keyed in...');

        if (updatedPosition.includes('-') || isNaN(updatedPosition)) {
            setErrorMsgUpdate('Input is negative or invalid, please try again');
        }
        else {
            setErrorMsgUpdate('');
            console.log('position input is being keyed in...');
            setPosition(Number(updatedPosition));
        }
    }
    // hypo 1: you got the event target value, now you have to put it straight into the right position in the object in the array
    // hypo 2 : maybe its ok if they track the number wrongly. HOWEVER, upon click it MUST go to the right place...
    // ie. going to handleupdate it must go to the right stock.id
    //=================================================================================
    //* Update

    const handleUpdate = async () => {
        console.log('1 i am the right person: ', stockDataSingle.ticker); // the right ticker is found 

        let findID = '';
        for (let i = 0; i < stocksDB.length; i++) {
            const currentObj = stocksDB[i];
            if (currentObj.fields.ticker === stockDataSingle.ticker) {
                findID = currentObj.id;
            }
        }

        const data = {
            fields: {
                position: position,
                Computed_grossannum: position * stockDataSingle.div * stockDataSingle.freq,
            },
        };

        const urlDB = `https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management/${findID}`;
        console.log('url is: ', urlDB);
        console.log(urlDB);
        const response = await fetch(urlDB, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        const jsonData = await response.json();
        setstocksDB(
            stocksDB.map((stock) => {
                if (stock.id === findID) {       
                    return jsonData;
                } else {
                    return stock;
                }
            })
        );
        setPosition(updatedPosition);
    };

    return (
        <>
            <label> Update total number of {stockDataSingle.ticker} shares: <input onChange={handleUpdateChange}></input> <button onClick={handleUpdate}>Update</button>
            </label>
            <p style={{ color: 'red' }}>{errorMsgUpdate}</p>
            <br></br>
        </>
    );

}


//* for future learning 
// let findID = '';
// for (let i = 0; i < stocksDB.length; i++) {
//     const currentObj = stocksDB[i];
//     console.log('1 currentObj is: ', currentObj);
//     console.log('2 i iterator is: ', i);
//     if (currentObj.fields.ticker === stockDataSingle.ticker) {
//         console.log('3 stockdataticker is: ', stockDataSingle.ticker);
//         findID = currentObj.id;
//         console.log('4 findID is: ', findID);
//     }
// }
