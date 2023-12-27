import StockItem from "./StockItem";
import Airtable from './Airtable';
import AirtableUpdate from "./AirtableUpdate";

export default function StockList({ stockData, stocksDB, setstocksDB, position, setPosition }) {

    return (
        <>
            <h2>Stocklist: add stocks you are interested in</h2>
            <p style={{ fontStyle: 'italic' }}>Key in the number of stocks you intend to buy. To consider more stocks, key in the Searchbar again.</p>
            <br></br>
            
            {stockData.map((stock) => (<StockItem stock={stock} />))}
            {/* {stockData.map((stock) => (<StockItem name={stock.name} ticker={stock.ticker} price={stock.price} div={stock.div} freq={stock.freq} />))} */}
            {/* <StockItem stockData={stockData} /> */}

            {stockData.map((stockDataSingle) => (<Airtable stockDataSingle={stockDataSingle} stocksDB={stocksDB} setstocksDB={setstocksDB} position={position} setPosition={setPosition} />))}
            {stockData.map((stockDataSingle) => (<AirtableUpdate stockDataSingle={stockDataSingle} stocksDB={stocksDB} setstocksDB={setstocksDB} position={position} setPosition={setPosition} />))}


        </>
    );
}

