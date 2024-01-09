import { combineReducers, createStore, Store } from 'redux';
import { nodeReducer } from './nodeReducer';

const reducers = combineReducers({
  nodes: nodeReducer,
});

const store: Store<RootState> = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export default store;
