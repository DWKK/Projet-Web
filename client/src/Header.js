import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="container-fluid mt-5 mb-5">
      {/* Green Header */}
      <div className="bg-success text-white p-3 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="h4 m-0">L'Atlas du monde</h1>
          <p className="m-0 small fst-italic">
            Par Kamal Wakim et Filip Nicolau
          </p>
        </div>
        <div>
          <a
            href="/pays"
            className={`text-white text-decoration-none me-3 ${
              currentPath === "/pays" ? "text-decoration-underline" : ""
            }`}
          >
            Pays
          </a>
          <a
            href="/langues"
            className={`text-white text-decoration-none me-3 ${
              currentPath === "/langues" ? "text-decoration-underline" : ""
            }`}
          >
            Langues
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
