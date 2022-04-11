import { useEffect, useState } from "react";

export default function ClockFn(props) {
    // const clock = useState( Date.now() );
    // clock[0] -> valore che è stato passato in fase di inizializzazione
    // clock[1] -> funzione di aggiornamento
    // clock[1]( Date.now() + 1 );

    const [clock, setClock] = useState( Date.now() );
    setInterval(() => setClock( Date.now() ), 1000);

    useEffect(() => {
        console.log('stato cambiato!!');
    }, []);

    return (
        <div>
            { clock }
        </div>
    );
}