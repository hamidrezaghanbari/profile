import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import counterReducer from './features/counter/counterSlice'
import examReducer from './exam/exam.slice'
import themeReducer from './theme/theme.slice'

const reducers = combineReducers({
  counter: counterReducer,
  exam: examReducer,
  theme: themeReducer
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['theme']
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
let persistor = persistStore(store);

export { store, persistor }