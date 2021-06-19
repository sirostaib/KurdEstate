import React, { Component } from "react";
import styled, { css } from "styled-components";
import Headerslogin from "../components/headerslogin";
import Properties from "../components/Properties";
import GoogleMapReact from "google-map-react";


function Homepage(props) {
  return (
    <>
      <Headerslogin
        style={{
          height: 244,
          width: 1920
        }}
      ></Headerslogin>
      <Image src={require("../assets/images/asa.png")}></Image>
      <Properties
        style={{
          height: 282,
          width: 1521,
          marginTop: 366,
          marginLeft: 200
        }}
      ></Properties>
      <MapView>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCekJNgRNPxPWwv04n1fD_zpmSTDB_QIJE" }}
        defaultZoom={4}
        provider="MapView.PROVIDER_GOOGLE"
        defaultCenter={{
          latitude: 37.78825,
          lat: 20.5937,
          lng: 78.9629
        }}
        customMapStyle="Standard"
      />
    </MapView>
  
    </>
  );
}

const Image = styled.img`
  width: 1920px;
  height: 602px;
  object-fit: contain;
`;

const MapView = styled.div`
  height: 204px;
  width: 817px;
`;

export default Homepage;
