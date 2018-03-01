import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//import App from './components/App';
import SearchPage from './components/SearchPage';
import reducer from './reducers/';

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <SearchPage
      history={history}
      location={location}
      place={state.place}
    />,
    document.querySelector('.container')
  );
};

render();
store.subscribe(render);
