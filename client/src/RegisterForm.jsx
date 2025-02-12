import React, { useState } from "react";
import "./RegisterForm.css"; // Import CSS file for styling

function RegisterForm() {
  return (
    
    <div className="form-wrapper">
        
      <div className="form-container">
      <img src="F:\mern\OIP.jpg" alt="" />
        <h2 className="form-title">Register a New Flower</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <br />
          <label>
            Phone No:
            <input type="number" name="price" required />
          </label>
          <br />
          <label>
            Category:
            <select name="category" required>
              <option value="">Select</option>
              <option value="Roses">Roses</option>
              <option value="Lilies">Lilies</option>
              <option value="Tulips">Tulips</option>
            </select>
          </label>
          <br />
          <label>
            Stock Quantity:
            <input type="number" name="stock" required />
          </label>
          <br />
          <button type="submit" className="submit-button">Add Flower</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
