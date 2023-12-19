import { useState, useEffect } from "react";
import debug from 'debug';
const log = debug('proj2:pages:project2');


export default function Airtable({ name, ticker, price, div, freq }) {

// log({name});

const [stocksDB, setstocksDB] = useState([]);

const token = 'patatpO7YZJM55teg.52d4f29e56072d88f606b1e7c9a075bdc94ed9db93e13a0f97f42ef96965d2ce';

// useEffect(() => {
// (async function () {

// const urlDB = 'https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management';

// const responseDB = await fetch(urlDB, {
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const dataDB = await responseDB.json();
//     setstocksDB(dataDB.records);
// /*         console.log(data);*/  
// })();
// }, []);

//=================================================================================
//* Create

    const handleCreate = () => {
  
        const data = {
        
                    "fields": {
                        "name": name,
                        "ticker": ticker,
                        "price": price,
                        "Dividend_amount": div,
                        "Payout_frequency": freq,
                    },
                };
    
//======================================

log(data);          // test 

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

const handleDelete = () => {

    
}

//=================================================================================
//* Update

const handleUpdate = () => {

    
}
//=================================================================================
return (
    <>
    <button onClick={handleCreate}>Create</button>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleUpdate}>Update</button>
    </>
);
} //end of Airtable 


//* structure of API data
// [{ name,price, ticker,div, freq  }, {}, {} ]