import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useAuth } from '../contexts/AuthContext'
import MaterialButtonLight from "./MaterialButtonLight";

import app from "../firebase"

     


function useItems(){

  const [items, setItems] = useState([]);
  const [owner, setOwner] = useState('');
  const {currentUser} = useAuth()
  const [email, setEmail] = useState(currentUser.email)

useEffect(()=>{
 



     const unsubscribe = app.firestore().collection('properties').orderBy('date', 'desc').limit(5).onSnapshot(snap=>{
         
       const fetched = snap.docs.map(doc=>({
            
               ... doc.data(), 
               id: doc.id
         }))

         

         setItems( fetched );
        

     });


    
    
         return unsubscribe
}, []);

return items;
}

const Property = () => {

  
  

const items = useItems()



  return (
    <div>
        
        {items.map( (item) => {
          return(
            
            <Container>
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
                <div key={item.id}>
                <TitleColumnRow>
                  <TitleColumn>
                    <Title>{item.title}</Title>
                    <Street>{item.location}</Street>
                  </TitleColumn>
                  <Discription>Discription</Discription>
                  <Price>${item.price}</Price>
                </TitleColumnRow>
                <Rect2></Rect2>
                <OwnerFullNameRow>
                  <OwnerFullName>Owner Full Name:{item.owner}</OwnerFullName>
                  <PhoneNumber>Phone Number:{item.phone}</PhoneNumber>
                  <M2>M2:{item.area}</M2>
                  <Purpose>Purpose:</Purpose>
                </OwnerFullNameRow>
                </div>
              </Information>
              <Image3 src={require("../assets/images/Unts-2.png")}></Image3>
            </MaterialButtonLightStack>
            <br/>
            <br/>
            <br/>
          </Container>
          
          );
        } )}
      </div>
    
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Discription = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 98px;
  width: 359px;
  font-size: 12px;
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
  height: 61px;
  width: 768px;
  font-size: 50px;
`;

const Street = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 25px;
  width: 554px;
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

export default Property;

