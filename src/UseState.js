import React from "react";

function UseState({ name }){
    const [error, setError] = React.useState(false)
    return(
        <section>
            <h2>{name}</h2>
            <p>Por favor, escribe el código de seguridad</p>

            {error && (
                <p>Error: el código es incorrecto.</p>
            )}

            <input type="text" placeholder="Código de seguridad"/>
            <button
                onClick={() => setError(!error)}
            >
                Confirmar
            </button>
        </section>
    )
}

export { UseState }