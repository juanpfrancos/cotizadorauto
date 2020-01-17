import React, { Component } from 'react';


class Resumen extends Component{
    
//Creo el método mostrarResumen 
        mostrarResumen = () => {
            const{marca,year,plan}= this.props.datos;
            // Si no hay marca o no hay año o no hay plan, retornar mostrarResumen vacío
            if (!marca || !year || !plan) return null;
            
            return(                
                <div className="resumen">
                <h2>Resumen de Cotización</h2>
                    <li>Marca: {marca}</li>
                    <li>Plan: {plan}</li>
                    <li>Año: {year}</li>
                </div>  
            )
        }
        
        render(){
        
        return(
            <div>
                { this.mostrarResumen()}
            </div>
        )
    }
}{}

export default Resumen; 