import { useState } from 'react'
import axios from "axios"
import GetBanks from './components/getAllBanks'
import ChangeBankName from './components/changeBankName'
import './App.css'


export default function App() {
  
  return (
    <>
      <GetBanks></GetBanks>
      <ChangeBankName></ChangeBankName>
    </>
  )


}