import React, {Component, useState, useEffect} from 'react'
import app from '../firebase'
import SearchResult from './SearchResult'
import { Link, useHistory } from "react-router-dom"

let obj = []

async function UseItems(props){
  

        console.log("test")
   
  
  obj = []
       app.firestore().collection('properties').where('city', '==', props).get().then((querySnapshot) => {
        
         querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
           
            obj.push( {
                id: doc.id,
                ...doc.data()
            })
            
        });
        console.log(obj)
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });


     
  
  

  }



export default function Search() {

    
    
    async function onSubmit (e) {



    

            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        
            UseItems(document.getElementById('searchBox').value);

   
       
       
     
    }


    
const [city, setCity] = useState('')
    
const [objT, setObjT] = useState([])

    return (
        <div>
            <h2 >this is the search page!</h2>
        <form >
           
        <div>
            <label>City: </label>
            <input type="text" name="searchBox" id="searchBox" value={city} onChange={e=>setCity(e.currentTarget.value)} />
        </div>
            <button type="submit" onClick={(e) => onSubmit(e)} >Search</button>
        </form>


        { useEffect(() => {
            setObjT(obj)
            console.log("setted!")
        objT.map( (item) => {
           console.log(item)
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
            })
          
        }, [obj] ) }

            {console.log(obj)}
            {console.log("sarawa")}
            <Link  to={{ pathname: '/SearchResult'  }  }> Show Resluts </Link>

        </div>
    )
}
