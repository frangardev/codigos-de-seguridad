import React from "react";

class ClassState extends React.Component{
    constructor(props){
        super(props)

        this.state={
            error: false,
        }
    }

    render(){
        return(
            <section>
                <h2>{this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad</p>

                {this.state.error && (
                    <p>Error: el código es incorrecto.</p>
                )}

                <input type="text" placeholder="Código de seguridad"/>
                <button
                    onClick={()=> this.setState({error: !this.state.error})}
                >
                    Confirmar
                </button>
            </section>
        )
    }
}

export { ClassState }