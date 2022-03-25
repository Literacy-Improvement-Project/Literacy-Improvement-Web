// components/layout/layout.js

import Navbar from './organism/navbar/Navbar'
import Footer from './organism/footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}