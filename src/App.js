import React, {useState} from 'react'
import './App.css';
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import {  Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex.js"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Signup from "./pages/SignUp"
import Login from "./pages/SignIn"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  console.log("currentUser", currentUser)
  console.log("apartments", apartments)

  return (
    <>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/myapartments" element={<ApartmentProtectedIndex />} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App