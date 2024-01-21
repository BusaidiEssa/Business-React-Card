import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
import "./style.css";

function Page(){
    return(
        <div className="page--container">
        <div className="page--container2">
            <Info />
            <About />
            <Interests />
            <Footer />
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(<Page />)
