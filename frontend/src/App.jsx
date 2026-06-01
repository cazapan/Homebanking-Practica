import { useState } from 'react'
import axios from "axios"
import GetBanks from './components/getAllBanks'
import ChangeBankName from './components/changeBankName'
import RegisterPersonCentralBank from './components/registerPersonCentralBank'
import SearchPersonByCBU from './components/searchPersonByCBU'
import AsingAliasToPerson from './components/asingAliasToPerson'
import SearchPersonByAlias from './components/searchPersonByAlias'
import TransferToAnotherBank from './components/transferToAnotherBank'
import CheckForTransfers from './components/checkForTransfers'
import './App.css'


export default function App() {
  
  return (
    <>
      <GetBanks></GetBanks>
      <ChangeBankName></ChangeBankName>
      <RegisterPersonCentralBank></RegisterPersonCentralBank>
      <SearchPersonByCBU></SearchPersonByCBU>
      <AsingAliasToPerson></AsingAliasToPerson>
      <SearchPersonByAlias></SearchPersonByAlias>
      <TransferToAnotherBank></TransferToAnotherBank>
      <CheckForTransfers></CheckForTransfers>
      <h1>HOLA</h1>
    </>
  )


}