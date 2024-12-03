import { useEffect, useState } from "react";
import ListePays from "./ListePays";

function Pays() {

    const [donnee, setDonnee] = useState([])

    useEffect(() => {

        const fetchPays = async () => {
            const res = await fetch('http://localhost:3005/pays');
            const pkg = await res.json()
            setDonnee(pkg);
            
        }

        fetchPays()

    },[])

    console.log(donnee)

    return (
        <div className="Pays">
            <ListePays donnee={donnee} />
        </div>
    );
}

export default Pays;