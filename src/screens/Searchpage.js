import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";

function Searchpage(props) {
  return (
    <Container>
      <SearchBarRow>
        <SearchBar>
          <Rect>
            <IconRow>
              <EvilIconsIcon
                name="search"
                style={{
                  color: "rgba(128,128,128,1)",
                  fontSize: 69,
                  height: 75,
                  width: 69
                }}
              ></EvilIconsIcon>
              <Inputtext placeholder="Enter the city here...."></Inputtext>
            </IconRow>
          </Rect>
        </SearchBar>
        <CupertinoButtonGrey
          style={{
            height: 94,
            width: 202,
            backgroundColor: "rgba(54,54,54,1)",
            borderRadius: 100,
            marginLeft: 88,
            marginTop: 21,
            boxShadow: "3px 3px 20px  0.03px rgba(0,0,0,1) "
          }}
        ></CupertinoButtonGrey>
      </SearchBarRow>
      <SearchResult>
        <Rect2>
          <NothingFound>Nothing found</NothingFound>
        </Rect2>
      </SearchResult>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(230, 230, 230,1);
  flex-direction: column;
  height: 120vh;
  width: 100vw;
`;

const SearchBar = styled.div`
  width: 1324px;
  height: 132px;
  flex-direction: column;
  display: flex;
`;

const Rect = styled.div`
  width: 1324px;
  height: 132px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  flex-direction: row;
  display: flex;
  box-shadow: 3px 3px 20px  0.02px rgba(0,0,0,1) ;
`;

const Inputtext = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 75px;
  width: 1166px;
  font-size: 25px;
  margin-left: 13px;
  border: none;
  background: transparent;
`;

const IconRow = styled.div`
  height: 75px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 64px;
  margin-left: 12px;
  margin-top: 29px;
`;

const SearchBarRow = styled.div`
  height: 132px;
  flex-direction: row;
  display: flex;
  margin-top: 38px;
  margin-left: 160px;
  margin-right: 146px;
`;

const SearchResult = styled.div`
  width: 1828px;
  height: 868px;
  flex-direction: column;
  display: flex;
  margin-top: 14px;
  margin-left: 46px;
`;

const Rect2 = styled.div`
  width: 1828px;
  height: 868px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  box-shadow: 3px 3px 20px  0.01px rgba(0,0,0,1) ;
`;

const NothingFound = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 70px;
  width: 448px;
  font-size: 25px;
  margin-top: 86px;
  margin-left: 114px;
`;

export default Searchpage;
