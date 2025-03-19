import React, { useState } from "react";
import axios from "axios"
import "./RegisterForm.css"; // Import CSS file for styling

function RegisterForm() {
  const [name,setName] = useState()
  const [phno,setphno] = useState()
  const [category, setcategory] = useState()
  const [qty,setqty] = useState()
  const [status,setStatus] = useState() 
  const handlesubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:9000/RegisterForm',{name,phno,category,qty})
    .then(result=>setStatus(result.data))
    .catch(err=>setStatus(err))

  }



  return (
    
    <div className="form-wrapper bg-hero-pattern" >
        
      <div className="form-container" >
        <h2 className="form-title" >Register a New Flower</h2>
        <form onSubmit={handlesubmit}>
          <label class="text-lg">
            Name:
            <input onChange={(e)=>setName(e.target.value)} type="text" class="text-lg" required />
          </label>
          <br />
          <label class="text-lg">
            Phone No:
            <input onChange={(e)=>setphno(e.target.value)} type="number" class="text-lg" required />
          </label>
          <br />
          <label class="text-lg">
            Category:
            <select onInput={(e)=>setcategory(e.target.value)}name="category" class="text-lg" required>
              <option value="">Select</option>
              <option value="Roses">Roses</option>
              <option value="Lilies">Lilies</option>
              <option value="Tulips">Tulips</option>
            </select>
          </label>
          <br />
          <label class="text-lg">
            Stock Quantity:
            <input onChange={(e)=>setqty(e.target.value)} type="number" name="stock" class="text-lg" required />
          </label>
          <br />
          <button type="submit" className="submit-button" class="text-lg bg-black text-white" >Add Flower</button>
          <div className="text-green-500 mt-4"> {status} </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
