import { useEffect, useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Form, Dropdown } from "react-bootstrap";
import ListePays from "./ListePays";

function Pays() {
  const [donnee, setDonnee] = useState([]);
  const [continentSelect, setContinentSelect] = useState("Tous Les Continents");
  const [triSelect, setTriSelect] = useState("Tri Par Ordre Alphabétique");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPays = async () => {
      const res = await fetch("http://localhost:3005/pays");
      const pkg = await res.json();
      setDonnee(pkg);
    };

    fetchPays();
  }, []);

  const handleQuery = async (e) => {
    setQuery(e.target.value);
    console.log(`query in handleQuery:${query}`);
  };

  const handleContinentSelect = (e) => {
    setContinentSelect(e);
  };

  const handleTriSelect = (e) => {
    setTriSelect(e);
  };

  return (
    <div className="Pays">
      <div className="d-flex w-50 mb-3 mx-auto column align-items-center">
        <Form.Control
          type="text"
          placeholder="Recherche..."
          onChange={handleQuery}
          className="w-50"
        />
        <Dropdown onSelect={handleContinentSelect} className="m-2">
          <DropdownButton variant="secondary" title={continentSelect}>
            <Dropdown.Item eventKey="Tous Les Continents">
              Tous Les Continents
            </Dropdown.Item>
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
        <Dropdown onSelect={handleTriSelect}>
          <DropdownButton variant="secondary" title={triSelect}>
            <Dropdown.Item eventKey="Tri Par Ordre Alphabétique">
              Tri Par Ordre Alphabétique
            </Dropdown.Item>
            <Dropdown.Item eventKey="Tri Par Population">
              Tri Par Population
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
      <ListePays
        donnee={donnee}
        query={query}
        continent={continentSelect}
        tri={triSelect}
      />
    </div>
  );
}

export default Pays;
