
import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:sarthakjoshi20351@acropolis.in">
        <Button>Contact: sarthakjoshi20351@acropolis.in</Button>
      </a>
    </div>
  );
};

export default Contact;