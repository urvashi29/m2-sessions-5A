import React, { useState } from "react";

const Form = ({ userData }) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState({
    usernameError: "",
    ageError: "",
    contactError: "",
  });

  const validateName = (username) => {
    let usernameError = error.usernameError;
    let formValid = false;

    //to validate
    if (username.trim().length < 6) {
      usernameError = "Please enter atleast 6 characters!";
      formValid = false;
    } else if (username.includes("2")) {
      usernameError = "2 is not allowed!";
      formValid = false;
    } else {
      usernameError = "";
      formValid = true;
    }

    setUserName(username);
    setError({ ...error, usernameError });
    return formValid;
  };

  const validateAge = (age) => {
    let ageError = error.ageError;
    let formValid = false;

    if (age.trim().length == 0 || age.trim().length > 3 || age.trim() >= 120) {
      ageError = "Enter valid age!";
      formValid = false;
    } else {
      ageError = "";
      formValid = true;
    }

    setAge(age);
    setError({ ...error, ageError });
    return formValid;
  };

  const validateContact = (contact) => {
    let contactError = error.contactError;
    let formValid = false;

    if (contact.trim().length != 10) {
      contactError = "Enter valid contact number!";
      formValid = false;
    } else if (!/^\d+$/.test(contact)) {
      contactError = "Enter only digits";
      formValid = false;
    } else {
      contactError = "";
      formValid = true;
    }

    setContact(contact);
    setError({ ...error, contactError });
    return formValid;
  };

  const handleChange = (e) => {
    // console.log(e.target.id);
    // console.log(e.target.value);
    if (e.target.id == "username") {
      validateName(e.target.value);
    }
    if (e.target.id == "age") {
      validateAge(e.target.value);
    }
    if (e.target.id == "contact") {
      validateContact(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateName(username) &&
      validateAge(age) &&
      validateContact(contact)
    ) {
      //   alert("form is submitted!");
      const user = { username, age, contact };//restructuring of object
      userData(user);
      setUserName("");
      setAge("");
      setContact("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter UserName</label>
        <input
          id="username"
          placeholder="Enter Username"
          onChange={handleChange}
          value={username}
        />
        <p style={{ color: "red" }}>{error.usernameError}</p>
        <label>Enter Age</label>
        <input
          id="age"
          placeholder="Enter age"
          onChange={handleChange}
          value={age}
        />

        <p style={{ color: "red" }}>{error.ageError}</p>
        <label>Enter Contact</label>
        <input
          id="contact"
          placeholder="Enter contact"
          onChange={handleChange}
          value={contact}
        />
        <p style={{ color: "red" }}>{error.contactError}</p>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
