import debug from 'debug';
const log = debug('proj2:pages:project2');

export default function SearchBar({ handleSubmit, tickerTitle, setTickerTitle }) {

    //*************************dont declare state twice. you declare here and StockPickerPage for tickerTitle.

    const handleChange = (event) => {
        event.preventDefault();
        log('you are typing');
        const inputChar = event.target.value;
        inputChar.toUpperCase();
        setTickerTitle(inputChar);                   //letters come out L13+21 onChange
    };

    return (
        <>
            <h2>Searchbar: search for stocks</h2>
            <p style={{ fontStyle: 'italic' }}>Try 'KO' for Coca-Cola, or 'AAPL' for Apple. Alternatively, look up the 'Historical data' page for stocks' tickers.</p>

            <form onSubmit={handleSubmit}>

                <label>Stock ticker <input value={tickerTitle} onChange={handleChange}></input></label>
                <br></br>
                <label>Investment amount <input></input></label>
                <br></br>
                <br></br>

                <button>Submit</button>
            </form>
        </>
    );
}


//button has a value
//value is plucked into the url
//into the useeffect
//but you need a list...
//get the list on the next page