import React from 'react';
import { getCategories } from './services/api';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      idCategory: '',
      listCategory: [],
    };
  }

  componentDidMount() {
    this.handleApi();
  }

  handleChange = ({ target }) => {
    console.log(target);
    const { name, id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      idCategory: id,
    });
  };

  handleApi = () => {
    getCategories()
      .then((data) => this.setState({
        listCategory: data,
      }));
  }

  render() {
    const { idCategory, listCategory } = this.state;
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <nav>
          <p>Categorias:</p>
          {listCategory.map(({ id, name }) => (
            <div key={ id }>
              <label data-testid="category" htmlFor={ id }>
                { name }
                <input
                  id={ id }
                  name="idCategory"
                  value={ idCategory }
                  type="radio"
                  onChange={ this.handleChange }
                />
              </label>
            </div>
          ))}
        </nav>
      </div>
    );
  }
}

export default SearchBar;
