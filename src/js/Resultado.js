import React, { Component } from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

class Resultado extends Component{
    render(){
        const resultado = this.props.resultado;
        
        const mensaje = (!resultado) ? 'Elige marca, año y tipo de seguro' : 'El total es';

        return(
            <div className="gran-total">
                {mensaje}
                <TransitionGroup componente="span" className="resultado">
                    <CSSTransition
                        classNames="resultado"
                        key={resultado}
                        timeout={{enter:700, exit:700}} 
                    >
                        <span>{resultado}</span>
                    </CSSTransition>

                </TransitionGroup>

            </div>
        )
    }
}

export default Resultado;