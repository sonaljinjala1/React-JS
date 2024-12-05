import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import View from "./pages/View"
import Add from "./pages/Add"
import Login from "./pages/login"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/view" element={<View />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
