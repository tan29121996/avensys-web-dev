import { render } from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Mobile from "./Mobile";
import Laptop from "./Laptop";
import Book from "./Book";
import Login from "./Login";

export const basket = createContext()

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    window.location.pathname = "/login"
    setLoggedIn(false)
  }

  return (
    <div class="container " style={{ backgroundColor: "grey", padding: "20px", display: "flex", justifyContent: "center" }}>
      <div class="d-flex flex-column">
        <BrowserRouter>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Link to="/mobile" class="badge badge-pill badge-primary">Mobile</Link>
            <Link to="/laptop" class="badge badge-pill badge-primary">Laptop</Link>
            <Link to="/book" class="badge badge-pill badge-primary">Book</Link>
            {loggedIn ?
              <button class="badge badge-pill badge-primary" style={{ backgroundColor: "blue" }} onClick={handleLogout}>Logout</button> :
              <Link to="/login" class="badge badge-pill badge-primary">Login</Link>
            }
          </div>
          <br></br>

          <Routes>
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/book" element={<Book />} />
            <Route path="/login" element={
              <basket.Provider value={{ set: setLoggedIn }}>
                <Login />
              </basket.Provider>
            } />
          </Routes>

        </BrowserRouter>
        {/* <Contact image="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png" name="Chad" message="Give me your wallet."/>
      <Contact image="https://cdn-icons-png.flaticon.com/512/147/147140.png" name="Andy" message="I'm blind."/>
      <Contact image="https://icon-library.com/images/avatars-icon/avatars-icon-19.jpg" name="Bo" message="What's up, homie."/> */}
      </div >
    </div>
  );
}

render(<App />, document.getElementById("root"))


