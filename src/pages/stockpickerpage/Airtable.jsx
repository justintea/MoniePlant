import { useState } from "react";

export default function Airtable({ stocksDB, setstocksDB, position, setPosition, token, name, ticker, price, div, freq }) {

  // const [stocksDB, setstocksDB] = useState([]);
  // const [position, setPosition] = useState('');

  const [Id, setId] = useState('');

  //=================================================================================

  let inputPosition = '';

  const handleAddChange = (event) => {
    event.preventDefault();

    inputPosition = event.target.value;
    console.log('position input is being keyed in...');
    console.log('inputPosition is: ', inputPosition);
    setPosition(inputPosition);

    console.log('position state is: ', position);
  }

  inputPosition = Number(position);           // you need to understand what can be passed, what cannot
  //=================================================================================
  //* Create

  const handleCreate = () => {

    const data = {

      "fields": {
        "name": name,
        "ticker": ticker,
        "price": price,
        "position": inputPosition,
        "Dividend_amount": div,
        "Payout_frequency": freq,
        "Computed_unitannum": div * freq,
        "Computed_grossannum": inputPosition * div * freq,

      },
    };

    console.log(position);
    console.log(data);
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
        //   body:     data,

      });
      const jsonData = await responseDB.json();
      setstocksDB([jsonData, ...stocksDB]);
    }

    create();
  };


  //=================================================================================
  //* Delete

  //*================================================================================
  //* For Update request 

  let inputID = '';

  const handleIDChange = (event) => {
    event.preventDefault();

    inputID = event.target.value;
    setId(inputID);
  }

  inputID = (Id);

  //=================================================================================

  // const handleUpdate = async () => { };
  // value from the label
  //needs a body with ${} 
  // then the basic structure...
  // how to get the id though? 

  let updatedPosition = '';
  const handleUpdateChange = async (event) => {

    event.preventDefault();
    updatedPosition = event.target.value;
    // console.log('position update input is being keyed in...');
    // console.log('updatePosition is: ', updatedPosition);
    setPosition(updatedPosition);
    // console.log('updated position state is: ', position);
    // updatedPosition = Number(position);
  }

  updatedPosition = Number(position);             // 20231222 0100am Level 1a completed. Update input works to update ONLY position
  // 0156am Level 1b completed. Update input works to update position, then autom the Computed amt. also renders in Portfolio, as w the change in state. 

  const handleUpdate = async () => {
    //* Level 2 Update request
    // Level 1 is not sufficient because 
    // 1. it manually updates numbers, circumvents formulas                                                       [Done]
    // 2. you have to manually key the ID inside                                                                  [Done, workaround :D]
    // 3. you have to manually write the data in code inside, rather than take user input via a input element     [Done]

    const data = {
      fields: {
        position: updatedPosition,
        Computed_grossannum: updatedPosition * div * freq,

      },
    };

    // const id = 'recsemxBB4mFT5v7N';
    const id = inputID;
    const urlDB = `https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management/${id}`;
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
        if (stock.id === "${id}") {
          return jsonData;
        } else {
          return stock;
        }
      })
    );

    setPosition(updatedPosition);
  };
  //=================================================================================
  return (
    <>
      <label> Add number of shares: <input onChange={handleAddChange}></input> <button onClick={handleCreate}>Create</button>
      </label>
      <br></br>

      <label> Update total number of shares: <input onChange={handleUpdateChange}></input>
      </label>
      <label> id: <input onChange={handleIDChange}></input> </label> <button onClick={handleUpdate}>Update</button>
      <br></br>

    </>
  );
} //end of Airtable 


//* Level 2 Update request
// Level 1 is not sufficient because 
// 1. it manually updates numbers, circumvents formulas
// 2. you have to manually key the ID inside
// 3. you have to manually write the data in code inside, rather than take user input via a input element 

//* Level 1 Update request
// const handleUpdate = async () => {

//   const data = {
//     fields: {
//       position: 50,
//       // remember not to circumvent code calculation 
//     },
//   };

//   const id = 'rec7qsewpEv71Z1S1';
//   const urlDB = `https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management/${id}`;
//   const response = await fetch(urlDB, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });
//     const jsonData = await response.json();
//     setstocksDB(
//       stocksDB.map((stock) => {
//         if (stock.id === "rec7qsewpEv71Z1S1") {
//           return jsonData;
//         } else {
//           return stock;
//         }
//       })
//     );

// };


{/* {<Portfolio stocksDB={stocksDB} setstocksDB={setstocksDB} token={token} />} */ }


{/* <button onClick={handleCreate}>Create</button>
<button onClick={handleUpdate}>Update</button> */}

//* structure of API data
// [{ name,price, ticker,div, freq  }, {}, {} ]