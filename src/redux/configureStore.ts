import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Message } from '../domain/Message';

export interface ApplicationState {
  messages: Record<string, Message>;
  /*
  messages: {
    [key: string]: Messages
  }
  */
}

const initialState: ApplicationState = {
  messages: {
    '2263EDA5-718F-4940-A2DF-E51CFD6D38C4': {
      id: '2263EDA5-718F-4940-A2DF-E51CFD6D38C4',
      message: 'Hallo Welt',
      date: 1552294754374,
      author: 'Elmarrr'
    }
  }
};

interface AddMessageAction {
  type: 'MESSAGE/ADD';
  payload: Message;
}

interface InitAction {
  type: '@@INIT';
}

type MessageActions = AddMessageAction;

type Actions = MessageActions | InitAction;

const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

export const addMessage = (message: string) => async (dispatch, getState) => {
  dispatch({ type: 'MESSAGE/BEFORE' });

  try {
    await waitFor(2500);

    dispatch({
      type: 'MESSAGE/ADD',
      payload: {
        id: String(Date.now()),
        message,
        author: 'Author',
        date: Date.now()
      }
    });
  } catch (e) {
    dispatch({ type: 'UPS', error: e });
  }
};

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case 'MESSAGE/ADD':
      return {
        ...state,
        messages: {
          ...state.messages,
          // Das ist eine Computed Property
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export const configureStore = () => {
  // Jetzt wird's komisch...

  const composeEnhancer =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // jetzt ist wieder alles gut

  return createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
};
