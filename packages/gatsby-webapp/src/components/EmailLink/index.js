import React from "react";

const EmailLink = ({ email, ...props }) => {
  return <a href={`mailto:${email}`} {...props}>{email}</a>;
};

export default EmailLink;
