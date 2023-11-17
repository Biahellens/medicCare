import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home } from './pages'

const AppRoutes = () => {
  return(
      <BrowserRouter>
       <Routes>
          <Route element = {<Home />}  path="/" />
       </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes