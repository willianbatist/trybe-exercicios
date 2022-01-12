import React, { Component } from 'react';

class Input extends Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <input 
            name="estadoFavorito" 
            value={ value } 
            onChange={ handleChange }
            >
            </input>
        );
    }
}

export default Input;
