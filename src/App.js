import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wallet from './components/wallet/Wallet'
import Lawers from './components/lawers/Lawers'
import Transaction from './components/transaction/Transaction'
import Notification from './components/notifications/Notification'
import Services from './components/services/Services'
import Firm from './components/firm/Firm'
import Editprofile from './components/editprofile/Editprofile'
import Reviews from './components/reviews/Reviews'
import About from './components/aboutus/About'
import Login from './components/login.jsx/Login'
import Documents from './components/documents/Documents'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((user)=>user.userReducer.payload)
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={user ? <Lawers /> :<Login />} />
        <Route path='/documents' element={user ?<Lawers /> : <Documents />} />
        <Route path='/requests' element={user ?<Lawers /> : <Login />} />
        <Route path='/notifications' element={user ?<Notification /> : <Login />} />
        <Route path='/wallet' element={user ? <Wallet /> : <Login />} />
        <Route path='/payment' element={user ?<Transaction /> : <Login />} />
        <Route path='/services' element={user ? <Services /> : <Login />} />
        <Route path='/firm' element={user ? <Firm /> : <Login />} />
        <Route path='/editprofile' element={user ?<Editprofile /> : <Login />} />
        <Route path='/reviews' element={user ? <Reviews /> : <Login />} />
        <Route path='/about' element={user ? <About /> : <Login />} />
      </Routes>
    </div>
  )
}

export default App
