import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
    // new key/val pair goes here
  })

  function handleChange(event) {
    // name is the KEY in the formData obj we're trying to uppdate
    const name = event.target.name
    let value = event.target.value

    // use `checked` property of checkboxes instead of `value`
    if(event.target.type === "checkbox") {
      value = event.target.checked
    }

  // optional: add logic for inputs ( number fields - parseInt or parseFloat) 

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName"
        onChange={handleChange} 
        value={formData.firstName} 
      />
      <input 
        type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName} 
      />
      <input 
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      {/* new input field goes here */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
