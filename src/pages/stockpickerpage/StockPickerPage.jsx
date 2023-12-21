import { useEffect, useState } from 'react'
import '../../App.css'
import SearchBar from './SearchBar'
import StockList from './StockList'
import Portfolio from './Portfolio'
import EstEarnings from './EstEarnings';

import debug from 'debug';
const log = debug('proj2:pages:project2');

export default function StockPickerPage() {

  const [tickerTitle, setTickerTitle] = useState('');
  const [stockData, setStockData] = useState([]);
  const [myAppdata, setMyAppData] = useState([]);
  const [stocksDB, setstocksDB] = useState([]);

  const PolyapiKey = 'KhfFuDal8cpHvhr2wRaBNcUjxc0ZHSfs'
  const token = 'patatpO7YZJM55teg.52d4f29e56072d88f606b1e7c9a075bdc94ed9db93e13a0f97f42ef96965d2ce';

  // const Ticker1 = 'KO';

  // let myAppdata = [];

  console.log('test2');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit triggered. event target value is: ', event.target.elements[0].value);
    const inputTicker = event.target.elements[0].value;
    console.log('Form is passing to handleSubmit via event: ', inputTicker);
    setTickerTitle(inputTicker);
    getApiData();
    
  };

  const getApiData = () => {
 
    //api data for basic financial stock info like price
    const stockbasicURL = `https://api.polygon.io/v1/open-close/${tickerTitle}/2023-12-01?adjusted=true&apiKey=${PolyapiKey}`;
    //api data for generic stock info like name, ticker, exchange 
    const stockdetailURL = `https://api.polygon.io/v3/reference/tickers?ticker=${tickerTitle}&active=true&apiKey=${PolyapiKey}`
    //api data for dividend. an object of 4 KVPairs, and 1st KVP is 'results' to an array of dividend objects. return 1 will do.
    const stockdividendURL = `https://api.polygon.io/v3/reference/dividends?ticker=${tickerTitle}&apiKey=${PolyapiKey}`;

    // console.log('test5');
    // console.log('stockbasicURL is: ', stockbasicURL);
    // console.log('stockdetailURL is: ', stockdetailURL);
    // console.log('stockdividendURL is: ', stockdividendURL);

    const makeAPIcall = async () => {
      console.log('test5a: inside start of the Async now');
      const stkDresponse = await fetch(stockdetailURL);       //a promise first, before a JSON. //useeffect - api call upon load + does once only
      const stkDdata = await stkDresponse.json();

      const stkBresponse = await fetch(stockbasicURL);
      const stkBdata = await stkBresponse.json();

      const stkDivresponse = await fetch(stockdividendURL);
      const stkDivdata = await stkDivresponse.json();

      const newData =
      {
        name: stkDdata.results[0].name,
        ticker: stkDdata.results[0].ticker,
        price: stkBdata.open,
        div: stkDivdata.results[0].cash_amount,
        freq: stkDivdata.results[0].frequency
        // name: stkDdata.results.name,
        // ticker: stkDdata.results.ticker,
        // price: stkBdata.open,
        // div: stkDivdata.results.cash_amount,
        // freq: stkDivdata.results.frequency

      };

      console.log('test5b: newData is- ', newData);
      // myAppdata.push(newData);                       // cannot push arrays
      // setMyAppData(myAppdata);                       //clean up 

      const tmp = [...myAppdata, newData];              //therefore create a tmp array
      setMyAppData(tmp);                                

      // log(`within async: ${myAppdata}`);
      // console.log('test6');
      console.log('myAppdata is in test 6: ', tmp);     
      
      setStockData(tmp);                //this is where myAppdata = StockData (see line 97)     //set state //clean up what needs to be 'set
      console.log('myAppdata is in test 6: ', tmp);

      console.log('test7: last in the async API call func');

    };

    console.log('test8: outside Async now');
    makeAPIcall();

    console.log('test9: after makeAPIcall function');

  };

  return (
    <>
      <h1>MoniePlant</h1>
      <h3>Your go-to tool for dividend strategy & information</h3>
      <p>A simple app to discover stocks with high dividend yields for investment. Nothing that will drastically change your level of wealth, just a money plant.</p>
      <hr></hr>

      <SearchBar handleSubmit={handleSubmit} tickerTitle={tickerTitle} setTickerTitle={setTickerTitle} />
      <hr></hr>

      {/* <Stocklist myAppdata={myAppdata} /> */}
      <StockList stockData={stockData}stocksDB={stocksDB} setstocksDB={setstocksDB} token={token}/>       
      {/* so its ok to pass stockData, instead of myAppdata */}
      <hr></hr>

      {/* <Portfolio /> */}
      
      <Portfolio stocksDB={stocksDB} setstocksDB={setstocksDB} token={token} />
      <EstEarnings stocksDB={stocksDB} />

    </>

  );
}
// QUESTION 1: why only when i control+S, the 2nd ticker appears? i thought there is state change, when i map the items? is there a way i can force a render?
// isnt line 80 a state update, hence will get a rerender? shouldnt write more code to rerender...
// but the shop inventory example, didnt need extra to render the peanuts what

{/* <StockList stockData={stockData} />        */}

