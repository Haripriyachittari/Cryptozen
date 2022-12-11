import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/Themecontext";
import Home from "./routes/Home";
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import Coinpage from './routes/Coinpage'
import axios from "axios";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/Authcontext";

function App() {

  const [coins, setCoins] =useState([]);
  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';
  useEffect(()=>{
    axios.get(url).then((response)=>{setCoins(response.data)
    })
  },[url])
  return (
    <ThemeProvider>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home coins={coins}/>}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/coin/:coin_id' element={<Coinpage/>}>
         <Route  path=':coin_id'/>
        </Route>
      </Routes>
      <Footer/>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
