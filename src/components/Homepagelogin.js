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
