import React from "react";

function UseState({ name }){

    const SEGURITY_CODE = 'paradigma'

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(()=>{
        if(!!loading){
            setTimeout(()=>{
                if(value === SEGURITY_CODE){
                    setError(false)
                } else{
                    setError(true)
                }

                setLoading(false)
            }, 2000)
        } 
    },[loading])

    return(
        <section>
            <h2>{name}</h2>
            <p>Por favor, escribe el código de seguridad</p>

            {(error && !loading) && (
                <p>Error: el código es incorrecto.</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input type="text" 
                placeholder="Código de seguridad"
                value={value}
                onChange={(event)=>{
                    setValue(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    setLoading(!loading) 
                    // setError(false)
                }}
            >
                Confirmar
            </button>
        </section>
    )
}

export { UseState }