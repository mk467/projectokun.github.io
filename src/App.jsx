import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import { Home } from "./Components/Home";
import { Product } from "./Components/Product";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { SignUp } from "./Components/SignUp";
import { Support } from "./Components/Support";


function App() {
return(
<>
    <BrowserRouter>
            <main className="main">
               <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Product/:id" element={<Product/>}/>
                    <Route path="/Product" element={<Product/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/SignUp" element={<SignUp/>}/>
                    <Route path="/Support" element={<Support/>}/>
                </Routes>
            </main>
    </BrowserRouter>
</>



);

}

export default App
