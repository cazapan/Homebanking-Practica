import { useState } from 'react'
import axios from "axios"
import GetBanks from './components/getAllBanks'
import ChangeBankName from './components/changeBankName'
import RegisterPersonCentralBank from './components/registerPersonCentralBank'
import SearchPersonByCBU from './components/searchPersonByCBU'
import AsingAliasToPerson from './components/asingAliasToPerson'
import SearchPersonByAlias from './components/searchPersonByAlias'
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
    </>
  )


}