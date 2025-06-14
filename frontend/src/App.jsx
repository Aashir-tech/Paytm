import { ReactDOM } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney  from "./pages/SendMoney";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from './pages/Profile'
import Home from './pages/Home';



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/service" element = {<Service />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/about" element = {<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element ={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />}/>
        <Route path="/profile" element = {<Profile />} />
      </Routes>
    </BrowserRouter> 

    </>
  )
}

export default App
