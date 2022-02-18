import React from "react";

function UseState({ name }){

    const SEGURITY_CODE = 'paradigma'

    // const [value, setValue] = React.useState('')
    // const [error, setError] = React.useState(false)
    // const [loading, setLoading] = React.useState(false)
    // const [delite, setDelite] = React.useState(false)
    // const [confirmed, setConfirmed] = React.useState(false)

    //Estados compuestos
    const [state, setState] = React.useState({
        error: false,
        loading: false,
        delite: false,
        confirmed: false,
        value: ''
    })

    //Declarando los estados
    const onConfirmed = ()=>{
        setState({
            ...state,
            error: false,
            confirmed:true,
            loading: false
        })
    }

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false
        })
    }
    const onLoading = () => {
        setState({
            ...state,
            loading: !state.loading
        })
    }
    const onWrite = (value) => {
        setState({
            ...state,
            value: value
        })
    }
    const onDelite = () => {
        setState({
            ...state,
            delite: true
        })
    }
    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            delite: false,
            value: ''
        })
    }

    React.useEffect(()=>{
        if(!!state.loading){
            setTimeout(()=>{
                if(state.value === SEGURITY_CODE){
                    onConfirmed()
                } else{
                   onError()
                }
            }, 2000)
        } 
    },[state.loading])

    //Estado inicial 
    if(!state.delite && !state.confirmed){
        return(
            <section>
                <h2>{name}</h2>
                <p>Por favor, escribe el código de seguridad</p>
    
                {(state.error && !state.loading) && (
                    <p>Error: el código es incorrecto.</p>
                )}
    
                {!!state.loading && (
                    <p>Cargando...</p>
                )}
    
                <input 
                    type="text" 
                    required
                    placeholder="Código de seguridad"
                    value={state.value}
                    onChange={(event)=>{
                        onWrite(event.target.value)
                    }}
                />
                <button
                    onClick={() => {
                       onLoading()
                    }}
                >
                    Confirmar
                </button>
            </section>
        )
    } //Estado de confirmación
    else if(!!state.confirmed && !state.delite){
        return(
            <React.Fragment>
                <h2>Desea Eliminar useState</h2>
                <button
                onClick={()=>{
                    onDelite()
                }}
                >
                    Si, deseo elinarlo
                </button>
                <button
                onClick={()=>{
                    onReset()
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
                   onReset()
                }}
                >
                    Me arrepentí, deseo volver atras
                </button>
            </React.Fragment>
        )
    }
}

export { UseState }