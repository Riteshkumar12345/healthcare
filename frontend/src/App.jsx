import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Myappoinment from './pages/Myappointment'
import Myprofile from './pages/Myprofile'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Navbar from './component/Navbar'
import Footer from './component/Footer'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctor' element={<Doctors/>} />
      <Route path='/doctor/:speciality' element={<Doctors/>} />
      <Route path='/my-appointment' element={<Myappoinment/>} />
      <Route path='/my-profile' element={<Myprofile/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/appointment/:docId' element={<Appointment/>} />

     </Routes>
     <Footer/>

</div>
  )
}

export default App
