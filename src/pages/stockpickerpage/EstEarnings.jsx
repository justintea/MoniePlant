export default function EstEarnings({ stocksDB }) {

    //====================================================================================
    const stocksStorage = stocksDB;
    const earnings = stocksStorage.reduce((earningsSumInStockObjects, obj) => {

        earningsSumInStockObjects += (obj.fields.position * obj.fields.Dividend_amount * obj.fields.Payout_frequency);
        // console.log(earningsSumInStockObjects);

        return earningsSumInStockObjects;
    }, 0);

    const finalEarnings = (Math.round(earnings * 100) / 100).toFixed(2);
    //number to 2dp. courtesy of Stackoverflow, https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places

    // console.log(earnings);
    // console.log(finalEarnings);
    // console.log('stocksDB: ',stocksDB);
    //====================================================================================
    const stocks2Storage = stocksDB;

    const portfolio = stocks2Storage.reduce((portfolioSumInStockObjects, obj) => {

        portfolioSumInStockObjects += (obj.fields.position * obj.fields.price);
        // console.log(portfolioSumInStockObjects);

        return portfolioSumInStockObjects;
    }, 0);

    const finalPortfolio = (Math.round(portfolio * 100) / 100).toFixed(2);

    //====================================================================================

    const value = (Math.round((finalEarnings / finalPortfolio * 100) * 100) / 100).toFixed(2);
    const divYield = (isNaN(value) ? 'N/A' : value);

    //====================================================================================

    return (
        <>
            <h2>Your earnings: check out the total dividend to be gained</h2>
            {/* <p>Estimated earnings (per annum): $999.99</p> */}
            <p>Estimated earnings from this portfolio (per annum): <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>${finalEarnings}</span> </p>
            <p>Total portfolio holding: <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>${finalPortfolio}</span> </p>
            <p>Dividend yield: <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> {divYield}% </span> </p>

        </>
    );
}

{/* <p style={{fontStyle: 'italic'}}></p> */ }

//* break down the logic to bitesize...
// access Airtable
// access each object's Computegrossannum
// do a reduce func? 