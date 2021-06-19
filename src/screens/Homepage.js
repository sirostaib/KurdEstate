import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Properties from "../components/Properties";

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

export default Homepage;
