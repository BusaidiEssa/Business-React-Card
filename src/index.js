import React from "react"
import ReactDOM from "react-dom"
import About from "./Info"
import About from "./About"
import About from "./Interests"
import About from "./Footer"

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
