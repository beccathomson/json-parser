import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { BinTreeNode } from "./BinaryParser";

export interface AppState {
  input: string,
  output: string,
  error?: SerializedError,
  binaryTree?: BinTreeNode
}
const initialState: AppState = {
    input: '',
    output: '',
  };
  
  export const selectAppState = (state: RootState): AppState => state.app;

  const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
      setInput(state: AppState, action: PayloadAction<string | undefined>) {
        state.input = action.payload ?? ""
        console.log(state.input)
      },
      setOutput(state: AppState, action: PayloadAction<string | undefined>) {
        state.output = action.payload ?? ""
      },
      setBinaryTree(state: AppState, action: PayloadAction<BinTreeNode | null>) {
        state.binaryTree = action.payload ?? undefined
      },
    },
  });

  

  export const { setInput, setOutput, setBinaryTree } = appSlice.actions;
  export default appSlice.reducer;
  