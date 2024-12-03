import { useEffect, useState } from "react";
import ListeLangues from "./ListeLangues";

function Langues() {

    const [donnee, setDonnee] = useState([])

    useEffect(() => {

        const fetchPays = async () => {
            const res = await fetch('http://localhost:3005/langues');
            const pkg = await res.json()
            setDonnee(pkg);
            
        }

        fetchPays()

    },[])

    console.log(donnee)

    return (
        <div className="Langues">
            <ListeLangues donnee={donnee} />
        </div>
    );
}

export default Langues;