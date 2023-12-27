// export default function StockItem({ name, ticker, price, div, freq }) {
export default function StockItem({ stock }) {

    return (
        <>
            <li>Name: {stock.name}
                <ul>
                    <li>Ticker: {stock.ticker} </li>
                    <li>Price: ${stock.price} </li>
                    <li>Dividend amount: ${stock.div} </li>
                    <li>Payout frequency (per annum): {stock.freq} </li>
                    <li>Computed (per annum): ${stock.div * stock.freq} </li>

                </ul>
            </li>
        </>
    );
}

{/* <li>Computed (per annum): ${div*freq} </li> */ }

{/* name
ticker
open price
dividend
frequency
estimated annual div */}