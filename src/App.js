import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Login from  "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import AddComplain from "./components/AddComplain";
import ViewComplains from './components/ViewComplains'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <Homepage/>
      </section>
    </>
  );
};

const Signin = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Login/>
      </section>
    </>
  );
};

const SignUp = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Signup/>
      </section>
    </>
  );
};

const Developer= () => {
  return (
    <>
      <Navbar />
      <section className="">
        <About/>
      </section>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/about" element={<Developer/>}/>
      <Route path='/AddComplain' element={<AddComplain/>}></Route>
      <Route path='/ViewComplains' element={<ViewComplains/>}></Route>
   
    </Routes>
    </BrowserRouter>
  
  );
};

export default App;
