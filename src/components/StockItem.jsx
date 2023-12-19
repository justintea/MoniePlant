

export default function StockItem({name, ticker, price, div, freq}) {

    return(
<>
<li>Name: {name}
    <ul>
    <li>Ticker: {ticker} </li>
    <li>Price: {price} </li>
    <li>Dividend amount: {div} </li>
    <li>Payout frequency: {freq} </li>
    {/* <li>Name: {stockd.name}</li>
    <li>Ticker: {stockd.ticker}</li>
    <li>Price: {stockb.price}</li>
    <li>Dividend amount: {stockdiv.cash_amount}</li>
    <li>Payout frequency: {stockdiv.frequency}</li> */}
    </ul>
    {/* <button>Add/remove stock</button> */}
</li>

{/* name
ticker
open price
dividend
frequency
estimated annual div */}

</>
    );
}