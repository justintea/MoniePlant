import StockItem from "./StockItem";

export default function Stocklist({myAppdata}) {

    return(
<>
<h2>Stocklist up</h2>

{myAppdata.map((item)=> (<StockItem name={myAppdata[0].name} ticker={myAppdata[0].ticker} price={myAppdata[0].price} div={myAppdata[0].div} freq={myAppdata[0].freq} />))}




{/* <StockItem myAppdata={myAppdata} /> */}
{/* <StockItem />
<StockItem />
<StockItem />
<StockItem /> */}

</>
    );
}