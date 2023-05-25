// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/css/about.css";
import mugImage from "../../mug.png";

const About = () => {
  return (
    <div className="flex-row justify-center">
      <h2>About Java-Rx</h2>
      <h3>
        Java-Rx, pronounced as Java 'Script, is a platform revolving around our
        love for a good old cup of 'joe. Come visit our site to see what other
        java enthusiasts are drinking. Maybe somebody will inspire you to expand
        your horizons and try a new beverage!
      </h3>
      <div>
        <img
          src={mugImage}
          alt="Coffee mug that looks like prescritpion bottle."
        />
      </div>
    </div>
  );
};

export default About;
