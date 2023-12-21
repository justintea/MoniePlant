import { useEffect } from 'react'
import EstEarnings from "./EstEarnings";
import StockItem from "./StockItem";

export default function Portfolio({stocksDB , setstocksDB, token, position, setPosition}) {


//=================================================================================
//* Render on load

useEffect(() => {
    (async function () {
      const url = "https://api.airtable.com/v0/appftNrNh7uZJfwvg/Database%20management?maxRecords=10&view=Grid%20view";
      
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setstocksDB(data.records);
  /*         console.log(data);*/  
  })();
  }, [position]);           // this is critical: 1) moved all the position useState to StockPickerPage in order to 2) pass to Portfolio & Airtable, when AT is the original user, becoz 3) i needed a refresh of state of the Portfolio everything an handleUpdate is done, so 4) useEffect had to be used, rerender more than 1 and when Position has been updated/changed 

//=================================================================================

    return(
<>
<h2>Your Dream Portfolio: check out gains you're missing out</h2>
{/* <StockItem /> */}
<pre>{JSON.stringify(stocksDB, null, 2)}</pre>


</>
    );
}


// Create * Input quantity = Airtable 
// read from airtable getall URL
//  