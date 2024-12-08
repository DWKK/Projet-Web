import React, { useEffect, useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";
// gives an error, props is wrong
const ListeLangues = () => {
  const [continentSelect, setContinentSelect] = useState("");
  const [langues, setLangues] = useState([]);
  const [languesAAfficher, setLanguesAAfficher] = useState("");

  const handleContinentSelect = (e) => {
    setContinentSelect(e);

    const params = new URLSearchParams();
    params.append("continent", e.toLowerCase());
    const url = `http://localhost:3005/langues?${params.toString()}`;

    const fetchLangues = async (url) => {
      const res = await fetch(url);
      setLangues(await res.json());
    };

    fetchLangues(url);
  };

  useEffect(() => {
    if (continentSelect !== "") {
      let output = `Les langues parlées en ${continentSelect} sont : `;
      langues.forEach((langue) => {
        output += `${langue}, `;
      });
      output = output.slice(0, -2);
      setLanguesAAfficher(output);
    }
  }, [langues, continentSelect]);

  return (
    <div>
      <Dropdown onSelect={handleContinentSelect} className="m-2">
        <DropdownButton
          variant="secondary"
          title={
            continentSelect === "" ? "Choisissez un continent" : continentSelect
          }
          key="dropdownLangue"
        >
          <Dropdown.Item eventKey="Amérique du Nord">
            Amérique du Nord
          </Dropdown.Item>
          <Dropdown.Item eventKey="Amérique du Sud">
            Amérique du Sud
          </Dropdown.Item>
          <Dropdown.Item eventKey="Asie">Asie</Dropdown.Item>
          <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
          <Dropdown.Item eventKey="Afrique">Afrique</Dropdown.Item>
          <Dropdown.Item eventKey="Océanie">Océanie</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
      <p>
        {continentSelect === ""
          ? "Choisissez un continent dans la liste déroulante pour voir toutes les langues officielles qu'on y parle!"
          : languesAAfficher}
      </p>
    </div>
  );
};

export default ListeLangues;
