import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Form';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './Helper'

class App extends Component {
 //Creo un State Vacio
  state ={
    resultado : '',
    datos:{}
  }
  //Creo un método cotizarSeguro

  cotizarSeguro = (datos) =>{
      console.log(datos);
      //Creo tres variables a partir de datos
      const {marca, plan, year } = datos;

      //Lógica para el cálculo del valor del seguro
      //Base de 2000
      let resultado = 2000;
      //Obtener la diferencia de años y por cada año restar el 4%
      const diferencia = obtenerDiferenciaAnio(year);
      resultado -= ((diferencia * 3) * resultado) / 100;
      //Incrementos por país de procedencia Americano 15% Asiatico 5% Europeo 30%
      resultado = calcularMarca(marca) * resultado;
      //Planes: El básico incrementa el valor 20% y el completo 50%
      let incrementoPlan = obtenerPlan(plan);
      //Dependiendo del plan incrementar
      resultado = incrementoPlan * resultado;
      

      
      //Lleno el State con el resultado
      this.setState({
        resultado : resultado
      })

  }


render(){
  return(
    <div className="container ">
      <Header />
      <Formulario
      cotizarSeguro={this.cotizarSeguro}
      />
    </div>    
  );
}

}

export default App;
