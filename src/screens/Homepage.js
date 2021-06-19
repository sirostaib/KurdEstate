import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Properties from "../components/Properties";
import Property1 from "../components/Property";

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
      <Property1
        style={{
          height: 282,
          width: 1521,
          marginTop: 166,
          marginLeft: 200
        }}
      ></Property1>
    </>
  );
}

const Image = styled.img`
  width: 1920px;
  height: 602px;
  object-fit: contain;
`;

export default Homepage;
