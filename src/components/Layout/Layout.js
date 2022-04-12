import React from "react"

import "./Layout.css"

// components
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

const Layout = () => {
  const renderLayout = () => (
    <div className="layout">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )

  return <>{renderLayout()}</>
}

export default Layout
