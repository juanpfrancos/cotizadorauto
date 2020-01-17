import React, { Component } from 'react';
import { primeraMayuscula } from './Helper';
import Resultado from './Resultado';


class Resumen extends Component{
    
//Creo el método mostrarResumen 
        mostrarResumen = () => {
            const{marca,year,plan}= this.props.datos;
            // Si no hay marca o no hay año o no hay plan, retornar mostrarResumen vacío
            if (!marca || !year || !plan) return null;
            
            return(                
                <div className="resumen">
                <h2>Resumen de Cotización</h2>
                    <li>Marca: {primeraMayuscula(marca)}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                    <li>Año: {year}</li>
                </div>  
            )
        }
        
        render(){
        
        return(
            <div>
                { this.mostrarResumen()}
                <Resultado 
                    resultado={this.props.resultado}
                />
            </div>
        )
    }
}

export default Resumen; 