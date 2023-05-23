import reducer, { AppState } from './app.slice';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export interface RootState {
  appState: AppState;
}
export type ReducerMap = Partial<RootState>;

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })],
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
