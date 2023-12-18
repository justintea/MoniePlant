import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Stocklist from './components/StockList'
import Portfolio from './components/Portfolio'
import debug from 'debug';
const log = debug('forms:components:project2');

function App() {

const PolyapiKey = 'KhfFuDal8cpHvhr2wRaBNcUjxc0ZHSfs'
const Ticker1 = 'KO';
// const Ticker2 = 'GOOG';
// const Ticker3 = 'MSFT';

//api data for basuc financial stock info like price
const stockbasicURL = `https://api.polygon.io/v1/open-close/${Ticker1}/2023-12-01?adjusted=true&apiKey=${PolyapiKey}`;
//api data for generic stock info like name, ticker, exchange 
const stockdetailURL = `https://api.polygon.io/v3/reference/tickers?ticker=${Ticker1}&active=true&apiKey=${PolyapiKey}`
//api data for dividend. an object of 4 KVPairs, and 1st KVP is 'results' to an array of dividend objects. return 1 will do.
const stockdividendURL = `https://api.polygon.io/v3/reference/dividends?ticker=${Ticker1}&apiKey=${PolyapiKey}`;

let myAppdata = [];

useEffect(() => {
const makeAPIcall = async () => {
const stkDresponse = await fetch(stockdetailURL);
const stkDdata = await stkDresponse.json();
log(stkDdata);
log(stkDdata.results[0].name);
log(stkDdata.results[0].ticker);


const stkBresponse = await fetch(stockbasicURL);
const stkBdata = await stkBresponse.json();
log(stkBdata.open);


const stkDivresponse = await fetch(stockdividendURL);
const stkDivdata = await stkDivresponse.json();
// log(stkDivdata[0]);
log(stkDivdata.results[0].cash_amount);
log(stkDivdata.results[0].frequency);

// myAppdata
};
makeAPIcall();

}, []);




  return (
    <>
      <h1>here we go! Dividend app!</h1>
      <SearchBar />
      <Stocklist />
      <Portfolio />

    </>
  )
}

export default App
