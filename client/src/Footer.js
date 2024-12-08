import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="bg-dark text-white p-3 d-flex justify-content-center align-items-center">
        <div>
          <p className="m-0 medium">
            Réalisé par Kamal Wakim et Filip Nicolau dans le cadre du cours{" "}
            <b>420-W33-GG</b> - Automne 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
