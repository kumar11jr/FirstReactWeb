import React from 'react'
import Both from "./both";
import Contact from './Contact';
import Services from './Services';



const Home = () => {
  return (
    <>
      <Both title="Grow your Bussiness with Us" desc="Go online by making your websites" line="Place where better meets the best" btn="Get Started" imgsrc="images/about1.png" destination="/service"/>
      <Services/>
      <Contact/>
    </>
  )
}

export default Home;