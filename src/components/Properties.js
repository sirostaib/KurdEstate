import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonLight from "./MaterialButtonLight";

function Properties(props) {
  return (
    <Container {...props}>
      <MaterialButtonLightStack>
        <MaterialButtonLight
          style={{
            height: 282,
            width: 1516,
            position: "absolute",
            left: 6,
            top: 0,
            boxShadow: "0px 0px 30px  0.18px rgba(0,0,0,1) "
          }}
        ></MaterialButtonLight>
        <Information>
          <TitleColumnRow>
            <TitleColumn>
              <Title>A192 Twy Malik slaw choni</Title>
              <Street>Twy Malik Street</Street>
            </TitleColumn>
            <Price>$270,000</Price>
          </TitleColumnRow>
          <Rect2></Rect2>
          <OwnerFullNameRow>
            <OwnerFullName>Owner Full Name:</OwnerFullName>
            <PhoneNumber>Phone Number: 07700740987</PhoneNumber>
            <M2>M2:</M2>
            <Purpose>Purpose:</Purpose>
          </OwnerFullNameRow>
        </Information>
        <Image3 src={require("../assets/images/Unts-2.png")}></Image3>
      </MaterialButtonLightStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  top: 96px;
  left: 396px;
  width: 1088px;
  height: 160px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;

  font-size: 50px;
`;

const Street = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 25px;
  width: 154px;
  font-size: 20px;
`;

const TitleColumn = styled.div`
  width: 368px;
  flex-direction: column;
  display: flex;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 63px;
  width: 219px;
  font-size: 50px;
  margin-left: 499px;
  margin-top: 7px;
`;

const TitleColumnRow = styled.div`
  height: 86px;
  flex-direction: row;
  display: flex;
  margin-left: 2px;
`;

const Rect2 = styled.div`
  width: 1088px;
  height: 4px;
  background-color: rgba(77,77,77,1);
  margin-top: 20px;
`;

const OwnerFullName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 30px;
  width: 393px;
  font-size: 20px;
  margin-top: 6px;
`;

const PhoneNumber = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 32px;
  width: 291px;
  font-size: 20px;
  margin-left: 6px;
  margin-top: 3px;
`;

const M2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
  text-align: left;
  width: 85px;
  height: 24px;
  margin-left: 23px;
  margin-top: 3px;
`;

const Purpose = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 27px;
  width: 185px;
  font-size: 20px;
  margin-left: 71px;
`;

const OwnerFullNameRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  margin-right: 34px;
`;

const Image3 = styled.img`
  top: 0px;
  left: 0px;
  width: 396px;
  height: 282px;
  position: absolute;
  object-fit: contain;
`;

const MaterialButtonLightStack = styled.div`
  width: 1522px;
  height: 282px;
  position: relative;
`;

export default Properties;
