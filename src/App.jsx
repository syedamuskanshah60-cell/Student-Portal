import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Component/Navbar'
import BreadCrumb from './Component/BreadCrumb'
import Search from './Component/search'
import StudentCard from './Component/StudentsCard'
import Header from './Component/Header'
import Footer from './Component/Footer'
import profile_pic from './assets/profile_pic.jpg'
import Pagination from './Component/Pagination'
import './App.css'

function App() {

  return (
    <>
 
      <div className="body-background">
      <Navbar/>
   
     
      
      <BreadCrumb/>
      <Header/>
     
      <hr></hr>
      <div className='d-flex flex-wrap gap-3 '>
      <StudentCard
      image={profile_pic}
      name="Muskan shah"
      program="BSSE"
      semester="5TH"
      />
       <StudentCard
      image={profile_pic}
      name="Eman Abbasi"
      program="BSSE"
      semester="5TH"
      />
       <StudentCard
      image={profile_pic}
      name="Mehk "
      program="BSSE"
      semester="5TH"
      />
       <StudentCard
      image={profile_pic}
      name="Ali shah"
      program="BSSE"
      semester="5TH"
      />
       <StudentCard
      image={profile_pic}
      name=" Mishal fatima"
      program="BSSE"
      semester="5TH"
      />
</div>
<div className="justify-content-center d-flex py-4">
  <Pagination/>
</div>
<Footer/>
</div>
    </>
  )
}

export default App
