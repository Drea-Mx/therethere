import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Footer from "./footer"

function Layout({ children, pink, black }) {

  
  return (
    <>
      <Normalizer />
      <Typography />
      <Header black={black} />
      <main>{children}</main>
      <Footer pink={pink} />
    </>
  )
}


export default Layout