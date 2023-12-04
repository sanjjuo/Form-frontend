import React from 'react'
import axios from 'axios'
import  { useState,useEffect } from 'react'



function Viewform() {
const [USerData, setUSerData] = useState([])

    useEffect(() => {
      axios.get("http://localhost:5002/form").then((res)=>{
        if(res.data)
        {
            console.log("response",res.data)
            setUSerData(res.data)

        }
      })
    }, [])
    
  return (
    <div>
        <table className="table table-striped">
  <thead  >
    <tr>
      <th>Slno</th>
      <th scope="col">Name</th>
      <th scope='col'>Logo</th>
      <th scope="col">Manager Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>



  <tbody>
   
    {
        USerData.map((data,index)=>(
        <tr key={index}>
      <td>{index+1}</td>
      <td>{data.name}</td>
      <td>{data.logo}</td>
      <td>{data.mname}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>{data.address}</td>
    </tr>
         ) )
       
    }
  
  </tbody>
</table>
    </div>
  )
}

export default Viewform