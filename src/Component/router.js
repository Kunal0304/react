import React from "react";
import {BrowserRouter as Router,Link,Route, Routes} from 'react-router-dom'
function Func21() {
    return(
        <>
        <Router>
        {/* <Link to="/Home"> HHome</Link> */}
        
        <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        </Routes>
        </Router>
        
    </>
        
    )
}

function Home() {
    return(
        <>
        <h1>home page</h1>
        <Link to="/about"> AAboutt</Link>
        <p>this is a  home page content</p>
        </>
    )
}
function About() {
    return(
        <>
        <h1>About page</h1>
        <p>this is a  about page content</p>
        <Link to="/"> HHome</Link>
        </>
    )
}
export default Func21;

