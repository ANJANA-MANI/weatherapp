import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    

<>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='weather-app.png'
              height='50'
              width='55'
              alt=''
              loading='lazy'
            />
            WeatherNow
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>


    
  )
}

export default Header