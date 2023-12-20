import StockItem from "./StockItem";
import Airtable from './Airtable';

export default function StockList({myAppdata , stockData}) {
    // console.log('from StockList: ', stockData);

    return(
<>
<h2>Stocklist</h2>

{stockData.map((item, idx) => (<Airtable name={stockData[0].name} ticker={stockData[0].ticker} price={stockData[0].price} div={stockData[0].div} freq={stockData[0].freq} />)) }

<StockItem stockData={stockData} />

</>
    );
}



// {myAppdata.map((item, idx) => (<Airtable name={myAppdata[0].name} ticker={myAppdata[0].ticker} price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq} />))}
{/* {myAppdata.map((item)=> (<StockItem key={myAppdata[0].name} name={myAppdata[0].name} ticker={myAppdata[0].ticker} price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq} />))} */}
{/* price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq}  */}
{/* {myAppdata.map((item)=> (<StockItem stockData={stockData} />))} */}
{/* {myAppdata.map((item)=> (<StockItem stockData={stockData} />))} */}

