import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function Form() {
  const [name, setname] = useState('')
  const [logo,setlogo] = useState('')
  const [mname, setmname] = useState('')
  const [phone, setphone] = useState('')
  const [email, setemail] = useState('')
  const [address, setaddress] = useState('')
  
  const data={
    name,
    logo,
    mname,
    phone,
    email,
    address
   }
  console.log(data);

  const handleSubmit=()=>{
    axios.post("http://localhost:5002/",data).then(function(response){
      console.log("response",response.data);
     }).catch(function(err){
      console.log(err);
     })

  }

  
  return (

    <div>
      <div className="container mt-5">
        <h2 className="mb-4">Team Information Form</h2>
        <form encType="multipart/form-data" >
          {/* Team Name */}
          <div className="form-group">
            <label htmlFor="teamName">Team Name:</label>
            <input value={name} onChange={(e)=>{
              setname(e.target.value)
            }}
              type="text"
              className="form-control"
              id="teamName"
              placeholder="Enter team name"
              required
            />
          </div>

          {/* Team Logo */}
          <div className="form-group">
            <label htmlFor="teamLogo">Team Logo:</label>
            <div className="custom-file">
            <input
  onChange={(e) => setlogo(e.target.files )}
  type="file"
  className="custom-file-input"
  id="teamLogo"
  accept="image/*"
  required
/>

              <label className="custom-file-label" htmlFor="teamLogo">
                
              </label>
            </div>
          </div>

          {/* Manager Name */}
          <div className="form-group">
            <label htmlFor="managerName">Manager Name:</label>
            <input value={mname} onChange={(e)=>{
              setmname(e.target.value)
            }}
              type="text"
              className="form-control"
              id="managerName"
              placeholder="Enter manager name"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input value={phone} onChange={(e)=>{
              setphone(e.target.value)
            }}
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e)=>{
              setemail(e.target.value)
            }}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea value={address} onChange={(e)=>{
              setaddress(e.target.value)
            }}
              className="form-control"
              id="address"
              rows="3"
              placeholder="Enter address"
              required
            ></textarea>
          </div>

          <button onClick={handleSubmit}type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
