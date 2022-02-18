import React from "react";

function UseState({ name }){

    const SEGURITY_CODE = 'paradigma'

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [delite, setDelite] = React.useState(false)
    const [confirmed, setConfirmed] = React.useState(false)

    React.useEffect(()=>{
        if(!!loading){
            setTimeout(()=>{
                if(value === SEGURITY_CODE){
                    setError(false)
                    setConfirmed(true)
                } else{
                    setError(true)
                }
                setLoading(false)
            }, 2000)
        } 
    },[loading])

    //Estado inicial 
    if(!delite && !confirmed){
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
    } //Estado de confirmación
    else if(!!confirmed && !delite){
        return(
            <React.Fragment>
                <h2>Desea Eliminar useState</h2>
                <button
                onClick={()=>{
                    setDelite(true)
                }}
                >
                    Si, deseo elinarlo
                </button>
                <button
                onClick={()=>{
                    setConfirmed(false)
                    setValue('')
                }}
                >
                    No, no deseo elinarlo
                </button>
            </React.Fragment>
        )
    }
    //Estado de eliminado
    else{
        return(
            <React.Fragment>
                <h2>useState fue eliminado</h2>
                <button
                onClick={()=>{
                    setDelite(false)
                    setConfirmed(false)
                    setValue('')
                }}
                >
                    Me arrepentí, deseo volver atras
                </button>
            </React.Fragment>
        )
    }
}

export { UseState }