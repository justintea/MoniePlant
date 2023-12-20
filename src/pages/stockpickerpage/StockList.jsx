import StockItem from "./StockItem";
import Airtable from './Airtable';

export default function StockList({stockData}) {
    // console.log('from StockList: ', stockData);

    return(
<>
<h2>Stocklist</h2>

{stockData.map((item, idx) => (<Airtable idx={idx} name={item.name} ticker={item.ticker} price={item.price} div={item.div} freq={item.freq}/>)) }
{/* {stockData.map((item, idx) => (<Airtable idx={idx} name={stockData[0].name} ticker={stockData[0].ticker} price={stockData[0].price} div={stockData[0].div} freq={stockData[0].freq} />)) } */}

{/* <StockItem stockData={stockData} /> */}

{stockData.map((stock) => (<StockItem name={stock.name} ticker={stock.ticker} price={stock.price} div={stock.div} freq={stock.freq}   />) )}

</>
    );
}



// {myAppdata.map((item, idx) => (<Airtable name={myAppdata[0].name} ticker={myAppdata[0].ticker} price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq} />))}
{/* {myAppdata.map((item)=> (<StockItem key={myAppdata[0].name} name={myAppdata[0].name} ticker={myAppdata[0].ticker} price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq} />))} */}
{/* price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq}  */}
{/* {myAppdata.map((item)=> (<StockItem stockData={stockData} />))} */}
{/* {myAppdata.map((item)=> (<StockItem stockData={stockData} />))} */}

