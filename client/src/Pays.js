import { useEffect, useState } from "react";
import ListePays from "./ListePays";

function Pays() {

    const [donnee, setDonnee] = useState([])

    useEffect(() => {

        const fetchPays = async () => {
            const res = await fetch('http://localhost:3005/pays');
            const donnee = await res.json()
            setDonnee(donnee);
            
        }

        fetchPays()

    },[])


    return (
        <div className="Pays">
            <ListePays props={donnee}/>
        </div>
    );
}

export default Pays;