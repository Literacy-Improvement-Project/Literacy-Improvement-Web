// components/layout/layout.js

import Navbar from './organism/navbar/navbar'
import Footer from './organism/footer/footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}