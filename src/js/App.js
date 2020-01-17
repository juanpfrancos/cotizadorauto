import React, { Component } from 'react'
import Header from './Header'
import Formulario from './Form'
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './Helper'
import Resumen from './Resumen'
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
      //Base de 200000
      let resultado = 200000;
      //Obtener la diferencia de años y por cada año restar el 4%
      const diferencia = obtenerDiferenciaAnio(year);
      resultado -= ((diferencia * 3) * resultado) / 100;
      //Incrementos por país de procedencia Americano 15% Asiatico 5% Europeo 30%
      resultado = calcularMarca(marca) * resultado;
      //Planes: El básico incrementa el valor 20% y el completo 50%
      let incrementoPlan = obtenerPlan(plan);
      //Le quito los decimales con la función parsefloat
      resultado = parseFloat(incrementoPlan * resultado).toFixed(0);
      

      //Creo objeto para el resumen
      const datosAuto = {
        marca: marca,
        plan: plan,
        year: year
      }

      //Lleno el State con el resultado
      this.setState({
        resultado : resultado,
        datos: datosAuto
      })

  }


render(){
  return(
    <div className="contenedor">
      <Header />
      <Formulario
      cotizarSeguro={this.cotizarSeguro}
      />
      
      <Resumen
      //Paso el state por medio props al componente Resumen
      datos={this.state.datos}
      resultado={this.state.resultado}
      />
    </div>    
  )
}

}

export default App;
