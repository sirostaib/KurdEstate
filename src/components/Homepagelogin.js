import React, { Component } from "react";
import styled, { css } from "styled-components";
import Headerslogin from "../components/headerslogin";
import Properties from "../components/Properties";

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
          marginTop: 100,
          marginLeft: 200,
          marginbottom: 100
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



export default Homepage;
