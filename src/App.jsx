import React,{lazy} from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"

// const Home = lazy(()=>import("./pages/Home"));
import Home from "./pages/Home";
import AddDog from './pages/AddMyDog'
function App() {

  return (
    <>
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add_dog_details" element={<AddDog/>}></Route>

          
          </Routes>
      </BrowserRouter>
    </div>
     </>
  )
}

export default App
