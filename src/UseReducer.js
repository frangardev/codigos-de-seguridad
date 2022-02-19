import React from "react";

function UseReducer({ name }){

    const SEGURITY_CODE = 'paradigma'

    const [state, dispatch ] = React.useReducer(reducer, initialState)

    React.useEffect(()=>{
        if(!!state.loading){
            setTimeout(()=>{
                if(state.value === SEGURITY_CODE){
                    dispatch({ type: 'CONFIRMED' })
                } else{
                   dispatch({ type: 'ERROR' })
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
                        // onWrite(event.target.value)
                        dispatch({ type: 'WRITE', playload: event.target.value })
                    }}
                />
                <button
                    onClick={() => {
                    //    onLoading()
                        dispatch({ type: 'LOADING' })
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
                    // onDelite()
                    dispatch({ type: 'DELITE' })
                }}
                >
                    Si, deseo elinarlo
                </button>
                <button
                onClick={()=>{
                    dispatch({ type: 'RESET' })
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
                   dispatch({ type: 'RESET' })
                }}
                >
                    Me arrepentí, deseo volver atras
                </button>
            </React.Fragment>
        )
    }
}

const initialState = {
    error: false,
    loading: false,
    delite: false,
    confirmed: false,
    value: ''
}

const reducerOBJECT = (state, action) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CONFIRMED': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'LOADING': {
        ...state,
        loading: !state.loading
    },
    'WRITE': {
        ...state,
        value: action
    },
    'DELITE': {
        ...state,
        delite: true
    },
    'RESET': {
        ...state,
        confirmed: false,
        delite: false,
        value: ''
    }
 })
  
 const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        return reducerOBJECT(state, action.playload)[action.type];
    } else {
        return {
            ...state,
        }
    }
 }

export { UseReducer }