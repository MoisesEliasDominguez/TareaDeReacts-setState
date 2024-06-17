import { useState } from 'react';

function CounterV3() {
    const [person, setPerson] = useState({
        name: "Luis",
        age: 23,
        color: "cyan"
    });

    function handleIncrementar() {
        setPerson({
            ...person,
            name: "Andy",
        });
    }

    return(
        <div>
            <h1>Contador Versión 3</h1>
            <h1>{person.name}</h1>
            <button onClick={handleIncrementar}>
                Incrementar
            </button>
        </div>
    );
}

export default CounterV3;