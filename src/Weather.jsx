import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardTitle, MDBCardBody, MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import AxiosInstance from './instance';
import cloud_icon from './Components/Assets/cloud.png';
import wind_icon from './Components/Assets/wind.png';
import humidity_icon from './Components/Assets/humidity.png';

function Weather() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState();
  const [wicon, setWicon] = useState();
  const [datadisplay, setDatadisplay] = useState('none');
  const [loading, setLoading] = useState(false);

  const search = async () => {
    try {
      setLoading(true);

      const api_key = 'e8ee08ec1c66047435b56384150f0f20';
      let fetchUrl = `/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const { data } = await AxiosInstance.get(fetchUrl);

      if (data.main && data.main.temp) {
        setWeather(data);
        setIcon(data.weather[0].icon);
      } else {
        alert('Please enter another city');
        console.error('Invalid data structure:', data);
      }
    } catch (error) {
      alert('Error fetching weather data. Please try again.');
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weather.weather && weather.weather[0]) {
      let img_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      setWicon(img_url);
      setDatadisplay('block');
    }
  }, [weather, icon]);

  return (
    <>
      <div style={{ width: "100%", height: "450px", paddingTop: "5px", backgroundImage: 'url("https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?w=740&t=st=1706874013~exp=1706874613~hmac=f02c3469b02516cd277873e15faea2bc4efa55e4108dbaea27d21586f290802b")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: 'flex', alignItems: "center", justifyContent: "center" }}>

        <MDBCard style={{ opacity: "0.7", width: '500px', paddingTop: "50px", height: "430px", backgroundImage: 'url("https://s3-alpha.figma.com/hub/file/802260836/b3019a6d-cad9-438f-8f30-04b72f036e97-cover.png")', backgroundRepeat: "repeat", backgroundSize: "contain", backgroundColor: "#AED6F1", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          <MDBInputGroup style={{ width: "290px" }}>
            <MDBInput label='Search' onChange={(e) => { setLocation(e.target.value) }} value={location || ""} />
            <MDBBtn rippleColor='dark' type='button' onClick={search}>
              <MDBIcon icon='search' />
            </MDBBtn>
          </MDBInputGroup>

          <MDBCardTitle> <img src={wicon} alt="" style={{ width: "95px", height: "90px",display: `${datadisplay}` }} /></MDBCardTitle>

          <div className="temp" style={{ fontSize: "24px", display: `${datadisplay}`,opacity: "1" }}>
            {loading ? 'Loading...' : `${weather.main?.temp}°C`}
          </div>
          <div className="temp" style={{ fontSize: "20px" }}>{weather.name}</div>

          <div className="row" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "600px",width:"100%" }}>

            <div className="element1" style={{ textAlign: "center" }}>
              <div className="container" style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
              <img className="icon" src={humidity_icon} alt="" style={{ width: "35px", height: "30px", display: `${datadisplay}` }} />
              </div>
           
              <div className="percent" style={{ display: `${datadisplay}` }}>{weather.main?.humidity}%</div>
              <div className="text" style={{ display: `${datadisplay}` }}>Humidity</div>
            </div>

            <div className="element2" style={{ textAlign: "center" }}>
            <div className="container" style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
              <img className="icon" src={wind_icon} alt="" style={{ width: "35px", height: "30px", display: `${datadisplay}` }} />
              </div>
              <div className="percent" style={{ display: `${datadisplay}` }}>{weather.wind?.speed}kmph</div>
              <div className="text" style={{ display: `${datadisplay}` }}>Wind Speed</div>
            </div>

          </div>
        </MDBCard>
      </div>
    </>
  );
}

export default Weather;
