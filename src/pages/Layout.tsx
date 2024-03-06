import React, { useState } from "react"
import Head from "next/head"
// import NextNprogress from "nextjs-progressbar"
import Header from "../components/Header"
// import SvgIcons from "./SvgIcons"
// import Sidebar from "./Sidebar"
// import Footer from "./Footer"

const Layout = (pageProps: any) => {
  const [sidebarShrink, setSidebarShrink] = useState(false)
  
  return (
    <div className={pageProps.className} style={{ width: '100%' }}>
      {/* <NextNprogress color="#4E66F8" options={{ showSpinner: false }} /> */}
      <Header
        setSidebarShrink={setSidebarShrink}
        sidebarShrink={sidebarShrink}
      />

      {/* <div className="d-flex align-items-stretch">
        <Sidebar sidebarShrink={sidebarShrink} />
        <div
          className={`page-holder ${
            pageProps.pageHolderClass
              ? pageProps.pageHolderClass
              : "bg-gray-100"
          }`}
        >
          {pageProps.children}
          <Footer />
        </div>
      </div>
      <SvgIcons /> */}
    </div>
  )
}

export default Layout
