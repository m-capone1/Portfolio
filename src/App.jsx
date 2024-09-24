import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import OneHealth from "./pages/OneHealthCaseStudy";
import KneeStrain from "./pages/OneHealthCaseStudy";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/OneHealth' element={<OneHealth />}/>
          <Route path='/KneeStrain' element={<KneeStrain />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
