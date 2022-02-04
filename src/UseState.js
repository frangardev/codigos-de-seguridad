import React from "react";

function UseState({ name }){
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(()=>{
        if(loading){
            setTimeout(()=>{
                setError(!error)
                setLoading(false)
            }, 2000)
        }
    },[loading])

    return(
        <section>
            <h2>{name}</h2>
            <p>Por favor, escribe el código de seguridad</p>

            {error && (
                <p>Error: el código es incorrecto.</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input type="text" placeholder="Código de seguridad"/>
            <button
                onClick={() => {
                    setLoading(!loading) 
                    setError(false)
                }}
            >
                Confirmar
            </button>
        </section>
    )
}

export { UseState }