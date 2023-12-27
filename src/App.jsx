import { Link, Route, Routes } from "react-router-dom"
import './App.css'
import HomePage from './pages/homepage/HomePage'
import StockPickerPage from './pages/stockpickerpage/StockPickerPage'
import StockLongListPage from './pages/stocklonglistpage/StockLongListPage'
import StockHistoryPage from './pages/singlestockhistoricalpage/StockHistoryPage'
import Airtable from "./pages/stockpickerpage/Airtable"

function App() {

  return (
    <>
      <nav>
        <Link to='/'> ==Homepage==  </Link>
        <Link to='/stockpicker'> /Stock Picker/ </Link>
        <Link to='/historical'> ==Historical data== </Link>
      </nav>
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stockpicker' element={<StockPickerPage />} />
        <Route path='/historical' element={<StockLongListPage />} />
        <Route path='/historical/:ticker' element={<StockHistoryPage />} />
        <Route path="/stockpicker/:id" component={Airtable} />


      </Routes>


    </>
  );
}

export default App

// prioritize other implementation before /historical/ticker