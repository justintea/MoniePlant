import { useState, useEffect } from "react";
import debug from 'debug';
import Portfolio from "./Portfolio";
import EstEarnings from "./EstEarnings";
const log = debug('proj2:pages:project2');


export default function Airtable({ stocksDB, setstocksDB, token, name, ticker, price, div, freq}) {

// log({name});

// const [stocksDB, setstocksDB] = useState([]);
const [position, setPosition] = useState('');

// const token = 'patatpO7YZJM55teg.52d4f29e56072d88f606b1e7c9a075bdc94ed9db93e13a0f97f42ef96965d2ce';


//=================================================================================

let inputPosition = '';

const handleChange = (event) => {
  event.preventDefault();

inputPosition = event.target.value;
console.log('position input is being keyed in...');
console.log('inputPosition is: ',inputPosition);
setPosition(inputPosition);

console.log('position state is: ',position);
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
                        "Computed_unitannum": div*freq,
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

//   const handleDelete = async () => {

// // to find the right ID, is it really that we have to
// // pass props of stockdata over

//       const urlDB = 'https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management/KO';
//       const responseDB = await fetch(urlDB, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const jsonData = await responseDB.json();
//       // setstocksDB([jsonData, ...stocksDB]);
//       setstocksDB(stocksDB.filter((s) => s.id !== jsonData.id));

//     };

//=================================================================================
//* Update

const handleUpdate = () => {

  // value from the label
  //needs a body with ${} 
  // then the basic structure...
  // how to get the id though? 

  






  
    
}
//=================================================================================
return (
    <>
    <label> Add number of shares: <input onChange={handleChange}></input> <button onClick={handleCreate}>Create</button>
    </label>
     <br></br> 
      
    <label> Update total number of shares: <input></input> <button onClick={handleUpdate}>Update</button>
    </label>  
    <br></br>
    
    </>
);
} //end of Airtable 

{/* {<Portfolio stocksDB={stocksDB} setstocksDB={setstocksDB} token={token} />} */ }


{/* <button onClick={handleCreate}>Create</button>
<button onClick={handleUpdate}>Update</button> */}

//* structure of API data
// [{ name,price, ticker,div, freq  }, {}, {} ]