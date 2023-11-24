import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/Api";

//get msg
export const get_msg = createAsyncThunk("cate/get_msg", async (_, { rejectWithValue, fulfillWithValue }) => {
  try {
    const { data } = await API.get("");
    return fulfillWithValue(data);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const messageReducer = createSlice({
  name: "msg",
  initialState: {
    msgs: [],
    msg: "",
    loading: false,
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: {},
});
export const { messageClear } = messageReducer.actions;
export default messageReducer.reducer;
