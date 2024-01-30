import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import "./scss/style.scss";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Team from "./Team";
import Join from "./Button";
import { useState } from "react";

function App() {
  const [state, handleSubmit] = useForm("xleqgwlk");
  let [error, setError] = useState('')
  let [success, setSuccess] = useState('')
  function removeModal() {
    var modal = document.querySelector('.modal')
    var x = document.querySelector('.x')
    var modalSec = document.querySelector('.modalSec')
    modal.classList.remove('show')
    modalSec.style.display = 'none'
  }
  const removeModalSec = (e) => {
    if (e.target === document.querySelector(".modalSec")) {
      removeModal()
    }
  }
  const handleBeforeSubmit = (e) => {
    e.preventDefault()
    let inps = [document.querySelector("#fullname"), document.querySelector("#number")]
    let empty = inps.filter(function (el) {
      return el.value.trim() === ""
    })
    if (empty[0]) {
      setError("Please fill out all fields")
    } else {
      setError("")
      let form = new FormData(e.target)
      handleSubmit(form);
      setSuccess("We have received your details. We will reach out to you soon")
    }
  }
  return (
    <BrowserRouter>
      <div className="App"></div>
      <nav className="nav">
        <div className="navTop">
          <h3>Become a Seller</h3>
          <img src="/L-page_assets/logo_png.png" className="logo" alt="" />
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About Us</Link>
            <Link to={"/Services"}>Services</Link>
            <Link to={"/Contact"}>Contact</Link>
          </div>
        </div>
        <div className="navDown">
          <div className="sid">
            <Link to={'/'}>
              <img src="/L-page_assets/logo_png.png" className="logo" alt="" />
            </Link>
          </div>
          <div className="searchBox">
            <div className="search">
              <span className="srch">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search Products, brands and categories"
              ></input>
            </div>
            <button className="btn srchBtn">SEARCH</button>
          </div>
          <Join />
        </div>
      </nav>
      <div className="modalSec" onClick={removeModalSec}>
        <form className="modal" onSubmit={handleBeforeSubmit} method="post">
          <span className="x" onClick={removeModal}>
            <i className="fas fa-xmark"></i>
          </span>
          <h3>Join our waitlist</h3>
          {error &&
            <div className="form-res err">
              {error}
            </div>}
          {success &&
            <div className="form-res success">
              {success}
            </div>}
          <div className="inputs">
            <div className="input">
              <img src="/L-page_assets/user.svg" />
              <input type="text" placeholder="Full name" name="fullname" id="fullname" />
              <ValidationError
                prefix="Full Name"
                field="fullname"
                errors={state.errors}
              />
            </div>
            <div className="input">
              <img src="/L-page_assets/mail.png" />
              <input type="text" placeholder="Email Address" name="email" id="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="input">
              <img src="/L-page_assets/call.png" />
              <input type="text" placeholder="Phone Number" name="number" id="number" />
              <ValidationError
                prefix="Phone Number"
                field="number"
                errors={state.errors}
              />
            </div>
          </div>
          <button className="btn joinWait" type="submit" disabled={state.submitting}>Join</button>
        </form>
      </div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Team" element={<Team />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
