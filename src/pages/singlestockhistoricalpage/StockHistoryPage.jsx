import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function StockHistoryPage() {

    // https://api.polygon.io/v3/reference/dividends?ticker=AAPL&apiKey=KhfFuDal8cpHvhr2wRaBNcUjxc0ZHSfs
    // pass ticker and apikey 

const [history, setHistory] = useState('');
const PolyapiKey = 'KhfFuDal8cpHvhr2wRaBNcUjxc0ZHSfs';

const params = useParams(); 

useEffect(() => {

    const ticker = params.ticker; 
    async function fetchHistory() {
        const response = await fetch(`https://api.polygon.io/v3/reference/dividends?ticker=${ticker}&apiKey=${PolyapiKey}`);
        // const response = await fetch(`https://api.polygon.io/v3/reference/dividends?ticker=${params.Ticker}&apiKey=${PolyapiKey}`);

        const historyData = await response.json(); 
        
        setHistory(historyData);
        console.log(historyData);

    }
    fetchHistory();
    }, []);


return(
<>
    <h2>Dividend history for {useParams.Ticker}</h2>
    {/* info dump here */}
    <pre>{JSON.stringify(history, null, 2)}</pre>


</>);
}