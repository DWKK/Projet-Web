
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap'
// gives an error, props is wrong
const ListePays = (props) => {

    const [query, setQuery] = useState('');

    const formatPopulation = (population) => {
        return new Intl.NumberFormat('fr', {
            style: 'decimal',
            useGrouping: true,
            groupSeparator: ' '
        }).format(population);
    }

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    return (
    <div>
        <div className='d-flex w-100 align-items-center mb-3'>
            <Form.Control
                type="text"
                placeholder="Recherche..."
                onChange={handleQuery}
                className="me-3 w-50"
            />
            <Dropdown as={ButtonGroup} className='me-3 w-50 max-width-300px min-width-300px overflow-auto'>
                <DropdownButton variant='secondary' title='Continents'>
                    <Dropdown.Item eventKey="1">Tous Les Continents</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Amérique du Nord</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Amérique du Sud</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Asie</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Europe</Dropdown.Item>
                    <Dropdown.Item eventKey="6">Afrique</Dropdown.Item>
                    <Dropdown.Item eventKey="7">Océanie</Dropdown.Item>
                </DropdownButton>
            </Dropdown>
            <Dropdown as={ButtonGroup} className='me-3 w-50 max-width-300px min-width-300px overflow-auto'>
                <DropdownButton variant='secondary' title='Tris'>
                    <Dropdown.Item eventKey="1">Tri Par Ordre Alphabétique</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Tri Par Population</Dropdown.Item>
                </DropdownButton>
            </Dropdown>
        </div>
        <Accordion>
            {props.donnee.filter(elem => {return elem.nom.toLowerCase().includes(query.toLowerCase())}).map((pays, index) => {
                return (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{pays.nom}</Accordion.Header>
                    <Accordion.Body class="align-items-left">
                        <p>Continent: {pays.continent}</p>
                        <p>Capitale: {pays.capitale}</p>
                        <p>Population: {formatPopulation(pays.population)}</p>
                        <p>Langue(s) officielle(s): {pays.langues_officielles.join(', ')}</p>
                        <p>Date de création: {pays.date_creation}</p>
                        <p>Drapeau: <a href={pays.drapeau}>{pays.drapeau}</a></p>
                    </Accordion.Body>
                </Accordion.Item>)
            })}
    </Accordion>
    </div>)
}

export default ListePays