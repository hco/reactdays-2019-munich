import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = (state = initialState, action) => state;

export const configureStore = () => {
  // Jetzt wird's komisch...

  const composeEnhancer =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // jetzt ist wieder alles gut

  return createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
};
