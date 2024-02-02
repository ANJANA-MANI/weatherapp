
import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import AxiosInstance from './instance';
const fetchUrl=`q=${location}&limit=1&appid=$`
function Weather() {
  const search = async() => {


    const {data}=await AxiosInstance.get()



  }
  let api_key = '4d381e6e91b9632a473625b2c0d0db6f';
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=$&limit=5&appid=e8ee08ec1c66047435b56384150f0f20`
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  return (
    <div style={{ width: "100%", height: "350px", paddingTop: "30px", backgroundImage: 'url("https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?w=740&t=st=1706874013~exp=1706874613~hmac=f02c3469b02516cd277873e15faea2bc4efa55e4108dbaea27d21586f290802b")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

      <MDBCard style={{ maxWidth: '440px', height: "300px", margin: "auto", paddingTop: "30px", backgroundImage: 'url("")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <MDBRow className='g-0'>

          <MDBInputGroup style={{ width: "290px", margin: "auto" }}>
            <MDBInput label='Search' onChange={(e) => { setLocation(e.target.value) }} value={location || ""} />
            <MDBBtn rippleColor='dark'>
              <MDBIcon icon='search' onClick={search} />
            </MDBBtn>
          </MDBInputGroup>


          <MDBCardBody>
            <MDBCardTitle>Weather Now</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
            <MDBCardText>
              <small className='text'></small>
            </MDBCardText>
          </MDBCardBody>

        </MDBRow>
      </MDBCard>

    </div>
  )
}

export default Weather