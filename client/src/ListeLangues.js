
import React from 'react';
// gives an error, props is wrong
const ListeLangues = (props) => {

    return (
    <ul>
        {props.donnee.map((pay, index) => {
            return (<li key={index}>{pay.langues_officielles.map((langue, index) => { return (<ul><li key={index}>{langue}</li></ul>)})}</li>)
        })}
    </ul>)

}

export default ListeLangues;