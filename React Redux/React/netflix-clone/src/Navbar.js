import React from 'react'
import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './Home'
import About from './About'
import Services from './Services'
import styles from './styles.css'

function Navbar() {
    
    return (
        <div>
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black" }}>
                    <img width={100} height={60} src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" />

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" to="/services">Services</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navbar