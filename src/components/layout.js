import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <Slice alias="header" />
      <div className="main-body" style={{ backgroundColor: '#d5becc',maxWidth: '1124px' ,margin: 'auto' }}>
      {children}
      </div>

      <Slice alias="footer" />
    </>
  )
}

export default Layout
