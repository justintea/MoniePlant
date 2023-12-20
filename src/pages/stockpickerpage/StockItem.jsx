

export default function StockItem({ stockData }) {
    // export default function StockItem({stockData}) {
    const stockInfo = stockData?.[0];

    return (
        <>
            <li>Name: {stockInfo?.name}
                <ul>
                    <li>Ticker: {stockInfo?.ticker} </li>
                    <li>Price: ${stockInfo?.price} </li>
                    <li>Dividend amount: ${stockInfo?.div} </li>
                    <li>Payout frequency (per annum): {stockInfo?.freq} </li>
                </ul>
            </li>
        </>
    );
}

{/* name
ticker
open price
dividend
frequency
estimated annual div */}

  {/* <li>Ticker: {stockData.ticker} </li>
    <li>Price: {stockData.price} </li>
    <li>Dividend amount: {stockData.div} </li>
    <li>Payout frequency: {stockData.freq} </li> */}
    {/* <li>Name: {stockd.name}</li>
    <li>Ticker: {stockd.ticker}</li>
    <li>Price: {stockb.price}</li>
    <li>Dividend amount: {stockdiv.cash_amount}</li>
    <li>Payout frequency: {stockdiv.frequency}</li> */}
    {/* <button>Add/remove stock</button> */}