import React from "react";

const TelephoneLink = ({ number = '', children, ...props }) => {
  const convertToTelephoneNumber = (phone) => {
    let parsed = phone;
    try {
      const convertedNumber = phone?.split("-").join("");
      parsed = convertedNumber;
    } catch (error) {
      console.error(`Error converting phone number: ${phone}`);
    }
    return parsed;
  };

  if (!number) return null
  return (
    <a href={number ? `tel:${convertToTelephoneNumber(number)}`: null} {...props}>
      {children}
    </a>
  )
}

export default TelephoneLink