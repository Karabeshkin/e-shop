import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof store.getState>;
