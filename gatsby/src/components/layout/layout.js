import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Typography } from "../styles/Typography"

function Layout({ children }) {

  
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}


export default Layout