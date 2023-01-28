import React from 'react'

const Footer = () => {
    let date = new Date().getFullYear();
  return (
    <>
    
    <footer className='w-100 bg-light text-center' style={{marginTop:"10rem"}}>
        <h6> Copyright {date} | All rights reserved.</h6>    
    </footer> 
    </>
  )
}

export default Footer
