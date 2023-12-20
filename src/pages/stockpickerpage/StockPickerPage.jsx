import { useEffect, useState } from 'react'
import '../../App.css'
import SearchBar from './SearchBar'
import StockList from './StockList'
import Portfolio from './Portfolio'
import debug from 'debug';
const log = debug('proj2:pages:project2');

export default function StockPickerPage() {

  const [tickerTitle, setTickerTitle] = useState('');
  const [stockData, setStockData] = useState([]);

  const PolyapiKey = 'KhfFuDal8cpHvhr2wRaBNcUjxc0ZHSfs'
  // const Ticker1 = 'KO';

  let myAppdata = [];

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
      };

      console.log('test5b: newData is- ', newData);
      myAppdata.push(newData);

      // log(`within async: ${myAppdata}`);
      // console.log('test6');
      // console.log('myAppdata is in test 6: ', myAppdata);
      setStockData(myAppdata);              
      console.log('test7: last in the async API call func');

    };

    console.log('test8: outside Async now');
    makeAPIcall();

    console.log('test9: after makeAPIcall function');

  };

  return (
    <>
      <h1>here we go! Dividend app!</h1>
      <SearchBar handleSubmit={handleSubmit} tickerTitle={tickerTitle} setTickerTitle={setTickerTitle} />
      {/* <Stocklist myAppdata={myAppdata} /> */}
      <StockList stockData={stockData} />

      <Portfolio />
    </>

  );
}


 
    //*functionality
    // search stock, add to list
    // add from list to portfolio 
    // airtable the data from portfolio
    // compute 