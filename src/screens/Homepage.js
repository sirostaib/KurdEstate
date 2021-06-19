import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Properties from "../components/Properties";
import Property from "../components/Property";

function Homepage(props) {
  return (
    <>
      <Header
        style={{
          height: 244,
          width: 1920
        }}
      ></Header>
      <Image src={require("../assets/images/asa.png")}></Image>
      <Property
        style={{
          height: 282,
          width: 1521,
          marginTop: 366,
          marginLeft: 200
        }}
      ></Property>
    </>
  );
}

const Image = styled.img`
  width: 1920px;
  height: 602px;
  object-fit: contain;
`;

export default Homepage;
