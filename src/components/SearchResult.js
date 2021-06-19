import React from 'react'


export default function SearchResult(props) {
    //console.log(testt)
    return (
        <div>
            <h2>This is the Results page!</h2>
            {
                
            props.obj ? props.obj.map( (item) => {
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
        } ) : null}
        </div>
    )
}
