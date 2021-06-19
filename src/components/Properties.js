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
          <TitleStack>
            <Title>A192 Twy Malik</Title>
            <City>City:</City>
          </TitleStack>

          <AddressColumnRow>
            <AddressColumn>
              <Address>Address:</Address>
              <Description>Description</Description>
            </AddressColumn>
            <Price>$270,000</Price>
          </AddressColumnRow>

          <OwnerFullNameColumnRow>
            <OwnerFullNameColumn>
              <OwnerFullName>Owner Full Name:</OwnerFullName>
              <Email>Email:</Email>
            </OwnerFullNameColumn>
            <PhoneNumberStack>
              <PhoneNumber>Phone Number:</PhoneNumber>
              <Area>M2:</Area>
            </PhoneNumberStack>
            <PurposeColumn>
              <Purpose>Purpose:</Purpose>
              <Date>Date:</Date>
            </PurposeColumn>
          </OwnerFullNameColumnRow>

        </Information>
        <Image3 src={require("../assets/images/Unts-2.png")}></Image3>
        <Rect2></Rect2>
      </MaterialButtonLightStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  top: 10px;
  left: 396px;
  width: 1088px;
  height: 62px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 50px;
  width: 1088px;
  height: 62px;
`;

const City = styled.span`
  font-family: Roboto;
  top: 56px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 31px;
  width: 359px;
  font-size: 20px;
`;

const TitleStack = styled.div`
  width: 1088px;
  height: 87px;
  position: relative;
`;

const Address = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 37px;
  width: 428px;
  font-size: 20px;
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 69px;
  width: 855px;
  font-size: 12px;
`;

const AddressColumn = styled.div`
  width: 855px;
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
  margin-left: 14px;
  margin-top: 6px;
`;

const AddressColumnRow = styled.div`
  height: 106px;
  flex-direction: row;
  display: flex;
  margin-top: 85px;
`;

const OwnerFullName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 30px;
  width: 393px;
  font-size: 20px;
`;

const Email = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 24px;
  width: 338px;
  font-size: 20px;
`;

const OwnerFullNameColumn = styled.div`
  width: 393px;
  flex-direction: column;
  display: flex;
  margin-bottom: 7px;
`;

const PhoneNumber = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 32px;
  width: 312px;
  font-size: 20px;
`;

const Area = styled.span`
  font-family: Roboto;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
  left: 0px;
  top: 31px;
  text-align: left;
  width: 183px;
  height: 24px;
`;

const PhoneNumberStack = styled.div`
  width: 312px;
  height: 55px;
  margin-left: 6px;
  margin-top: 1px;
  position: relative;
`;

const Purpose = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 27px;
  width: 351px;
  font-size: 20px;
`;

const Date = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 29px;
  width: 351px;
  font-size: 20px;
  margin-top: 3px;
`;

const PurposeColumn = styled.div`
  width: 351px;
  flex-direction: column;
  display: flex;
  margin-left: 26px;
  margin-top: 2px;
`;

const OwnerFullNameColumnRow = styled.div`
  height: 61px;
  flex-direction: row;
  display: flex;
  margin-top: 7px;
`;

const Image3 = styled.img`
  top: 0px;
  left: 0px;
  width: 396px;
  height: 282px;
  position: absolute;
  object-fit: contain;
`;

const Rect2 = styled.div`
  top: 202px;
  left: 396px;
  width: 1088px;
  height: 4px;
  position: absolute;
  background-color: rgba(77,77,77,1);
`;

const MaterialButtonLightStack = styled.div`
  width: 1522px;
  height: 282px;
  position: relative;
`;

export default Properties;
