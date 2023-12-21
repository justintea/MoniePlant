import { Link } from 'react-router-dom'
import { list } from '../../assets/list'

export default function StockLongListPage() {
    
  const items = list.map(({idx, Ticker, Name, Industry, MarketCap})  => {

    const path = `/historical/${Ticker}`;
    return ( <li key={idx}>   <Link to={path}>{Ticker}</Link> - {Name} - {Industry} - {MarketCap}</li> )

  });
  
  
  // (
  // <li key={idx}> {Ticker} - {Name} - {Industry} - {MarketCap}</li>    
  // ) 
  // ); 
  
  // (<li key={idx}> {Ticker} - {Name} - {Industry} - {MarketCap}</li>    ) 
  // ); 

  return (
      <>
        <h1>Historical data</h1>
        <p>Here is the list of all US stocks. Click on what you're interested in to learn more about their dividend history </p>  
        <p>(Coming soon!!!)</p>
        <p style={{fontStyle: 'italic'}}>Long list of stocks, to render their dividend history. Data credit: Stockanalysis.com</p>  
        <ul>
          {items}
        </ul>
        </>
    );
  }
  


  // see how to render all the tickers and name 