import { useState } from "react";
import { token } from '../../components/keysntokens'

export default function Airtable({ stocksDB, setstocksDB, position, setPosition, stockDataSingle }) {

  // const [stocksDB, setstocksDB] = useState([]);
  // const [position, setPosition] = useState('');
  const [errorMsgCreate, setErrorMsgCreate] = useState('');

  //=================================================================================

  let inputPosition = '';
  let error = '';

  const handleCreateChange = (event) => {
    event.preventDefault();
    inputPosition = event.target.value;
    console.log('position input is being keyed in...');

    if (inputPosition.includes('-') || isNaN(inputPosition)) {
      setErrorMsgCreate('Input is negative or invalid, please try again');
    }
    else {
      setErrorMsgCreate('');

      setPosition(inputPosition);
    }
  }

  inputPosition = Number(position);

  //=================================================================================
  //* Create

  const handleCreate = () => {
    if (error) { return; }
    //if theres an error, dont proceed with creating. Else, continue...

    const data = {

      "fields": {
        "name": stockDataSingle.name,
        "ticker": stockDataSingle.ticker,
        "price": stockDataSingle.price,
        "position": inputPosition,
        "Dividend_amount": stockDataSingle.div,
        "Payout_frequency": stockDataSingle.freq,
        "Computed_unitannum": stockDataSingle.div * stockDataSingle.freq,
        "Computed_grossannum": inputPosition * stockDataSingle.div * stockDataSingle.freq,

      },
    };

    //======================================

    async function create() {
      const urlDB = 'https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management';
      const responseDB = await fetch(urlDB, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),

      });
      const jsonData = await responseDB.json();
      setstocksDB([...stocksDB, jsonData]);
    }

    create();
  };

  //=================================================================================
  return (
    <>
      <label> Add number of {stockDataSingle.ticker} shares: <input onChange={handleCreateChange}></input> <button onClick={handleCreate}>Create</button>
      </label>
      <p style={{ color: 'red' }}>{errorMsgCreate}</p>
    </>
  );
} //end of Airtable 

//* api structure
//* 1 data
// const data = {
//   };
//* 2 async function
// async function Update() {
// const urlDB = 'https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management/${id}';
// }
//* 3 execute Async function
// Update();
// }

//* structure of API data
// [{ name,price, ticker,div, freq  }, {}, {} ]
