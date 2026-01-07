import React from "react";

// Function based component
const Details = ({ contact, firstName }) => {
  // const Details = (props) => {
  //   console.log(props);
  // const { contact, firstName } = props;//destructuring of object

  return (
    <>
      <p>
        Contact: {contact.email} | {contact.contact_number}
      </p>
    </>
  );
};

export default Details;
