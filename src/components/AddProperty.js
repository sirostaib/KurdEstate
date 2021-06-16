import React, {useState} from 'react'
import app from '../firebase'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'

const AddProperty= () => {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [owner, setOwner] = useState('')
    const [area, setArea] = useState()
    const [price, setPrice] = useState()
    const [city, setCity] = useState('')
    const {currentUser} = useAuth()
    const [email, setEmail] = useState(currentUser.email)
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [postBy, setPostBy] = useState('')
    const [phone, setPhone] = useState()
    var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    function onSubmit(e){
        e.preventDefault()



        app.firestore()
        .collection('properties')
        .add({
            email,
            title,
            owner,
            price, 
            date, 
            area, 
            city, 
            phone,
            location,
            description
            //postedBy

        })
        .then( ()=>{
            setTitle('')
            setPrice()
            setOwner('')
            setArea()
            setCity('')
            setLocation('')
            setDescription('')
            setPhone()
            history.push("/")
        } )

    }

    return (
        <form onSubmit={onSubmit}>
            <h1>You can add property here!</h1>
            <hr />
            <br />
        <div>
            <label>Property Title: </label>
            <input type="text" value={title} onChange={e=>setTitle(e.currentTarget.value)} />
        </div>
        <br />
        <div>
            <label>Owner Full Name: </label>
            <input type="text" value={owner} onChange={e=>setOwner(e.currentTarget.value)} />
        </div>
        <br />
        <div>
            <label>Owner Phone Number: </label>
            <input type="text" value={phone} onChange={e=>setPhone(e.currentTarget.value)} />
        </div>
        <br />
        <div>
            <label>Total Area: </label>
            <input type="number" value={area} onChange={e=>setArea(e.currentTarget.value)} />
        </div>
        <br />
        <div>
            <label>City: </label>
            <input type="text" value={city} onChange={e=>setCity(e.currentTarget.value)} />
        </div>
        <br />
        <div>
            <label>Location: </label>
            <input type="text" value={location} onChange={e=>setLocation(e.currentTarget.value)} />
        </div>
        <br />
        <div>
            <label>Price: </label>
            <input type="number" value={price} onChange={e=>setPrice(e.currentTarget.value)} />
        </div>
        <br />
        <div>
            <label>Description: </label>
            <input type="text" value={description} onChange={e=>setDescription(e.currentTarget.value)} />
        </div>
        <br />
            <button type="submit">Post Property</button>
        </form>
    )
}

export default AddProperty
