import React from "react"

import "./Layout.css"

// components
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

const Layout = props => {
  const renderLayout = () => (
    <div className="layout">
      <Navbar />
      <Main title={props.title} background={props.background} backdrop={props.backdrop}>
        {props.children}
      </Main>
      <Footer />
    </div>
  )

  return <>{renderLayout()}</>
}

export default Layout
