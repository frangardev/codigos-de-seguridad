import React from "react";

function UseReducer({ name }){
    const SEGURITY_CODE = 'paradigma'

    const [state, dispatch ] = React.useReducer(reducer, initialState)

    const onConfirmed = ()=> dispatch({ type: actionTypes.confirmed })
    const onError = () => dispatch({ type: actionTypes.error })
    const onLoading = () => dispatch({ type: actionTypes.loading })
    const onDelite = () => dispatch({ type: actionTypes.delite })
    const onReset = () => dispatch({ type: actionTypes.reset })
    const onWrite = (event) => {
        //onChange manda pordefecto el evento
        dispatch({ type: actionTypes.write, playload: event.target.value })
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
                    onChange={ onWrite }
                />
                <button
                    onClick={ onLoading }
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
                <button onClick={ onDelite }>
                    Si, deseo elinarlo
                </button>
                <button onClick={ onReset }>
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
                <button onClick={ onReset }>
                    Me arrepentí, deseo volver atras
                </button>
            </React.Fragment>
        )
    }
}

const actionTypes = {
    error: 'ERROR',
    confirmed: 'CONFIRMED',
    loading: 'LOADING',
    write: 'WRITE',
    delite: 'DELITE',
    reset: 'RESET',
}

const initialState = {
    error: false,
    loading: false,
    delite: false,
    confirmed: false,
    value: ''
}

const reducerOBJECT = (state, action) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.confirmed]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    [actionTypes.loading]: {
        ...state,
        loading: !state.loading
    },
    [actionTypes.write]: {
        ...state,
        value: action
    },
    [actionTypes.delite]: {
        ...state,
        delite: true
    },
    [actionTypes.reset]: {
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