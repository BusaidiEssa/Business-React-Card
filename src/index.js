import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function Page(){
    return(
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
            

        </div>
    )
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(<Page />)
