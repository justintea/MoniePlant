import { useEffect } from 'react'
import EstEarnings from "./EstEarnings";
import StockItem from "./StockItem";

export default function Portfolio({stocksDB , setstocksDB, token}) {


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
  }, []);

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