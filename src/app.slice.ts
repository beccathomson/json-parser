import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface AppState {
  input: string,
  output: string,
  error?: SerializedError
}
const initialState:AppState = {
    input: '',
    output: '',
  };
  
  export const selectAppState = (state: RootState): AppState => state.appState;

  const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
      setInput(state: AppState, action: PayloadAction<string | undefined>) {
        state.input = action.payload ?? ""
      },
      setOutput(state: AppState, action: PayloadAction<string | undefined>) {
        state.output = action.payload ?? ""
      },
    },
  });

  

  export const { setInput, setOutput } = appSlice.actions;
  export default appSlice.reducer;
  