import { useState, useEffect } from "react";
import debug from 'debug';
const log = debug('proj2:pages:project2');


export default function Airtable({ name, ticker, price, div, freq}) {

// log({name});

const [stocksDB, setstocksDB] = useState([]);

const token = 'patatpO7YZJM55teg.52d4f29e56072d88f606b1e7c9a075bdc94ed9db93e13a0f97f42ef96965d2ce';

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
                        "Computed_annum": div*freq,
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

  const handleDelete = async () => {

// to find the right ID, is it really that we have to
// pass props of stockdata over

      const urlDB = 'https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management/KO';
      const responseDB = await fetch(urlDB, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = await responseDB.json();
      // setstocksDB([jsonData, ...stocksDB]);
      setstocksDB(stocksDB.filter((s) => s.id !== jsonData.id));

    };

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