import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMediaLinks = () => {
  return (
    <div className="social_links">
      <a 
         href="https://www.linkedin.com/in/james-freian-hapitan-7357a2370/" 
         target="_blank" 
         rel="noopener noreferrer" // <-- ADDED THIS
      >
        <BsLinkedin />
      </a>
      <a 
         href="https://github.com/hapitan21" 
         target="_blank"
         rel="noopener noreferrer" // <-- ADDED THIS
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
