import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useAuth } from '../contexts/AuthContext'

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
              <div key={item.id}>

                <h2 >{item.title}</h2>
                <h6 >Posted By: {item.owner}</h6>
                <h6 >Total Area: {item.area}</h6>
                <h6 >City: {item.city}</h6>
                <h6 >Location: {item.location}</h6>
                <h6 >Posted Date: {item.date}</h6>
                <h6 >Phone: {item.price}</h6>
                <h6 >Description: {item.description}</h6>
                <h6 >Phone: {item.phone}</h6>
                <br />
                <hr />
                <br />
              </div>
          );
        } )}
      
      </div>
        
      
    
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


export default Property;

