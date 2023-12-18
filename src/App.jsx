import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Stocklist from './components/StockList'
import Portfolio from './components/Portfolio'

function App() {

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
