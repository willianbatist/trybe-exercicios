import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdd = screen.queryByText('Clique aqui');

    expect(buttonAdd).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('the page should receive a click', () => {
    renderWithRedux(<App />);
    const buttonAdd = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdd)
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('if the application receives increments after the a click', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdd = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdd)
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});
