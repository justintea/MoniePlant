
export default function AirStockItem({ key, stock }) {

    // console.log('stocks id', stock.id);

    return (
        <>
            {/* <pre>{JSON.stringify(stocksDB, null, 2)}</pre> */}
            <li>Name: {stock.fields.name}
                <ul>
                    <li>Ticker: {stock.fields.ticker} </li>
                    <li>Price: ${stock.fields.price} </li>
                    <li>Position: {stock.fields.position}</li>
                    <li>Dividend amount: ${stock.fields.Dividend_amount} </li>
                    <li>Payout frequency (per annum): {stock.fields.Payout_frequency} </li>
                    <li>Computed (per annum, per share): ${stock.fields.Computed_unitannum} </li>
                    <li>Computed (per annum, gross): ${stock.fields.Computed_grossannum}</li>

                </ul>
            </li>
        </>
    );
}