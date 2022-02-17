import React from "react";
import { Loading } from "./Loading";

const SEGURITY_CODE = 'paradigma'

class ClassState extends React.Component{
    constructor(props){
        super(props)

        this.state={
            error: false,
            loading: false,
            value: ''
        }
    }
    
    componentDidUpdate(){
        if(!!this.state.loading){
            setTimeout(()=>{
                //Este setState vueve a llamar al componentDodUpDate, asi que se repite infinitamente. Por eso es importane que este dentro de un condicional para evitar esto
                // this.setState({loading : false, error : false})
                if(SEGURITY_CODE === this.state.value){
                    this.setState({loading : false, error : false})
                }else{
                    this.setState({loading : false, error : true})
                }
            }, 2000)
        }
    }
    render(){
        return(
            <section>
                <h2>{this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad</p>

                {(this.state.error && !this.state.loading) && (
                    <p>Error: el código es incorrecto.</p>
                )}
                 {this.state.loading && (
                //Se llamara al Loading cuando se hagan combios
                   <Loading/>
                )}

                <input 
                    type="text" 
                    placeholder="Código de seguridad"
                    value={this.setState.value}
                    onChange={(event)=>{
                        this.setState({value: event.target.value })
                    }}
                />
                <button
                    onClick={()=> this.setState({loading: !this.state.loading})}
                >
                    Confirmar
                </button>
            </section>
        )
    }
}

export { ClassState }