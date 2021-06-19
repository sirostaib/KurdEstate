import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonGrey1 from "../components/MaterialButtonGrey1";
import MaterialButtonGrey2 from "../components/MaterialButtonGrey2";

function Singupform(props) {
  return (
    <Container>
      <Text1Row>
        <Text1>
          <Rect>
            <Welcom>Welcome To Kurd ESTATE</Welcom>
            <Rect3></Rect3>
            <Text>
              Kurd&#39;s membership is composed of residential and commercial
              brokers, salespeople, property managers, appraisers, counselors,
              and others engaged in the real estate industry.
            </Text>
            <MaterialButtonGrey1
              style={{
                height: 56,
                width: 214,
                borderRadius: 100,
                marginTop: 294,
                marginLeft: 164
              }}
            ></MaterialButtonGrey1>
          </Rect>
        </Text1>
        <RegistartionG>
          <Rect2>
            <Title>Registration</Title>
            <FullName placeholder="   Full name"></FullName>
            <Email placeholder="   Entre the email"></Email>
            <PasswordRow>
              <Password placeholder="   Password"></Password>
              <VerifyPassword placeholder="   Verify Password"></VerifyPassword>
            </PasswordRow>
            <MaterialButtonGrey2
              style={{
                height: 78,
                width: 202,
                borderRadius: 100,
                marginTop: 126,
                marginLeft: 765
              }}
            ></MaterialButtonGrey2>
          </Rect2>
        </RegistartionG>
      </Text1Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const Text1 = styled.div`
  width: 535px;
  height: 730px;
  flex-direction: column;
  display: flex;
  margin-top: 66px;
`;

const Rect = styled.div`
  width: 598px;
  height: 968px;
  background-color: rgba(51,51,51,1);
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  flex-direction: column;
  display: flex;
  margin-top: -66px;
  margin-left: -63px;
`;

const Welcom = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  height: 56px;
  width: 482px;
  font-size: 40px;
  margin-top: 82px;
  margin-left: 51px;
`;

const Rect3 = styled.div`
  width: 220px;
  height: 2px;
  background-color: #E6E6E6;
  border-width: 1px;
  border-color: rgba(211,211,211,1);
  margin-top: 8px;
  margin-left: 51px;
  border-style: solid;
`;

const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 194px;
  width: 482px;
  font-size: 30px;
  margin-top: 58px;
  margin-left: 51px;
`;

const RegistartionG = styled.div`
  width: 1182px;
  height: 968px;
  flex-direction: column;
  display: flex;
`;

const Rect2 = styled.div`
  width: 1182px;
  height: 968px;
  background-color: #E6E6E6;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  flex-direction: column;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 50px;
  text-align: center;
  margin-top: 66px;
  margin-left: 454px;
`;

const FullName = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 102px;
  width: 536px;
  font-size: 20px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  margin-top: 121px;
  margin-left: 55px;
  border: none;
  background: transparent;
`;

const Email = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 92px;
  width: 536px;
  font-size: 20px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  margin-top: 62px;
  margin-left: 55px;
  border: none;
  background: transparent;
`;

const Password = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 102px;
  width: 536px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

const VerifyPassword = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 102px;
  width: 536px;
  border-radius: 100px;
  font-size: 20px;
  background-color: rgba(255,255,255,1);
  margin-left: 20px;
  border: none;
  background: transparent;
`;

const PasswordRow = styled.div`
  height: 102px;
  flex-direction: row;
  display: flex;
  margin-top: 90px;
  margin-left: 55px;
  margin-right: 35px;
`;

const Text1Row = styled.div`
  height: 968px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 85px;
  margin-left: 118px;
  margin-top: 56px;
`;

export default Singupform;
