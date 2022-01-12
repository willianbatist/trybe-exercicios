import React, { Component } from 'react';
import Input from './input';

class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      estadoFavorito: '',
    };
  }
  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

    render() {
        return(
          <div>
            <label>
               Estado Favorito:
               <input 
               value={ this.state.estadoFavorito } 
               handleChange={ this.handleChange }
               />
               <p>{ this.state.estadoFavorito }</p>
           </label>
           <label>
             Willian
             <input type="checkbox" name="checkedMarcado" value={this.state.checkedMarcado} onChange={this.handleChange}></input>
           </label>
          </div> 
        );
    }
}

export default Form;