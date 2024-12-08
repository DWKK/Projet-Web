import Accordion from "react-bootstrap/Accordion";
// gives an error, props is wrong
const ListePays = ({ donnee, query, continent, tri }) => {
  console.log(`query in child: ${query}`);
  const formatPopulation = (population) => {
    return new Intl.NumberFormat("fr", {
      style: "decimal",
      useGrouping: true,
      groupSeparator: " ",
    }).format(population);
  };

  return (
    <div className=" jusitfy-content-center vw-100">
      <Accordion>
        {donnee
          .filter((elem) => {
            return elem.nom
              .toLowerCase()
              .includes(query.toString().toLowerCase());
          })
          .map((pays, index) => {
            return (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{pays.nom}</Accordion.Header>
                <Accordion.Body class="align-items-left">
                  <p>Continent: {pays.continent}</p>
                  <p>Capitale: {pays.capitale}</p>
                  <p>Population: {formatPopulation(pays.population)}</p>
                  <p>
                    Langue(s) officielle(s):{" "}
                    {pays.langues_officielles.join(", ")}
                  </p>
                  <p>Date de création: {pays.date_creation}</p>
                  <p>
                    Drapeau: <a href={pays.drapeau}>{pays.drapeau}</a>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </div>
  );
};

export default ListePays;
