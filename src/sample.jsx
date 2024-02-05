<div style={{ width: "100%", height: "450px", paddingTop: "5px", backgroundImage: 'url("https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?w=740&t=st=1706874013~exp=1706874613~hmac=f02c3469b02516cd277873e15faea2bc4efa55e4108dbaea27d21586f290802b")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: 'flex', alignItems: "center", justifyContent: "center" }}>

        <MDBCard style={{ opacity: "0.7", width: '500px', paddingTop: "50px", height: "400px", backgroundImage: 'url("")', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "#AED6F1", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          <MDBInputGroup style={{ width: "290px" }}>
            <MDBInput label='Search' onChange={(e) => { setLocation(e.target.value) }} value={location || ""} />
            <MDBBtn rippleColor='dark' type='button' onClick={search}>
              <MDBIcon icon='search' />
            </MDBBtn>
          </MDBInputGroup>

          <MDBCardTitle> <img src={wicon} alt="" style={{ width: "95px", height: "90px",display: `${datadisplay}` }} /></MDBCardTitle>

          <div className="temp" style={{ fontSize: "34px", display: `${datadisplay}` }}>
            {loading ? 'Loading...' : `${weather.main?.temp}°C`}
          </div>
          <div className="temp" style={{ fontSize: "24px" }}>{weather.name}</div>

          <div className="row" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "200px" }}>

            <div className="element1" style={{ textAlign: "center",left:"0" }}>
              <img className="icon" src={humidity_icon} alt="" style={{ width: "35px", height: "30px", display: `${datadisplay}` }} />
              <div className="percent" style={{ display: `${datadisplay}` }}>{weather.main?.humidity}%</div>
              <div className="text" style={{ display: `${datadisplay}` }}>Humidity</div>
            </div>

            <div className="element2" style={{ textAlign: "center" }}>
              <img className="icon" src={wind_icon} alt="" style={{ width: "35px", height: "30px", display: `${datadisplay}` }} />
              <div className="percent" style={{ display: `${datadisplay}` }}>{weather.wind?.speed}kmph</div>
              <div className="text" style={{ display: `${datadisplay}` }}>Wind Speed</div>
            </div>

          </div>
        </MDBCard>
      </div>