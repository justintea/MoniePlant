export default function EstEarnings({stocksDB}) {

const earnings = stocksDB.reduce((earningsSumInStockObjects, obj) => {
    
    // console.log(obj.fields.position);
    // console.log(obj.fields.Dividend_amount);
    // console.log(obj.fields.Payout_frequency);
    // console.log(earningsSumInStockObjects);

    earningsSumInStockObjects += (obj.fields.position * obj.fields.Dividend_amount * obj.fields.Payout_frequency); 
    console.log(earningsSumInStockObjects);

return earningsSumInStockObjects;
},0);

const finalEarnings = (Math.round(earnings * 100) / 100).toFixed(2);
//number to 2dp. courtesy of Stackoverflow, https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places

// console.log(earnings);
// console.log(finalEarnings);
// console.log('stocksDB: ',stocksDB);

    return(
<>
<h2>Your earnings: check out the total dividend to be gained</h2>
{/* <p>Estimated earnings (per annum): $999.99</p> */}
<p>Estimated earnings from this portfolio (per annum): <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>${finalEarnings}</span> </p>

</>
    );
}

{/* <p style={{fontStyle: 'italic'}}></p> */}

//* break down the logic to bitesize...
// access Airtable
// access each object's Computegrossannum
// do a reduce func? 