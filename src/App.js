import React, {useEffect, useState} from 'react'
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
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState(mockApartments)

  console.log("currentUser", currentUser)
  // console.log("apartments", apartments)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if(loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])

  const login = (userInfo) => {
    fetch(`http://localhost:3000/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signUp = (userInfo) => {
    fetch(`http://localhost:3000/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`http://localhost:3000/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve the token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token") // remove the token
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<Signup signUp={signUp} />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        {
          currentUser && <Route path="/myapartments" element={<ApartmentProtectedIndex currentUser={currentUser} apartments={apartments} />} />
        }
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