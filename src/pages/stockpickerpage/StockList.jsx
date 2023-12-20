import StockItem from "./StockItem";
import Airtable from './Airtable';

export default function StockList({myAppdata , stockData}) {
    // console.log('from StockList: ', stockData);

    return(
<>
<h2>Stocklist up</h2>

<StockItem stockData={stockData} />

</>
    );
}


{/* {myAppdata.map((item)=> (<StockItem key={myAppdata[0].name} name={myAppdata[0].name} ticker={myAppdata[0].ticker} price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq} />))} */}

// myAppdata.map((item, idx) => (<Airtable name={myAppdata[0].name} ticker={myAppdata[0].ticker} price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq} />))
{/* price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq}  */}
{/* {myAppdata.map((item)=> (<StockItem stockData={stockData} />))} */}
{/* {myAppdata.map((item)=> (<StockItem stockData={stockData} />))} */}

