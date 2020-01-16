import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Form';


class App extends Component {
  //Creo un método cotizarSeguro

  cotizarSeguro = (datos) =>{
      console.log(datos);
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
