import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const set_token = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clear_token = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunk_api) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      set_token(response.data.token);
      return response.data;
    } catch (error) {
      return thunk_api.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunk_api) => {
    try {
      const response = await axios.post("/users/login", credentials);
      set_token(response.data.token);
      return response.data;
    } catch (error) {
      return thunk_api.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunk_api) => {
  try {
    await axios.post("/users/logout");
    clear_token();
  } catch (error) {
    return thunk_api.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunk_api) => {
    const state = thunk_api.getState();
    const persisted_token = state.auth.token;

    if (!persisted_token) {
      return thunk_api.rejectWithValue("No token found");
    }

    set_token(persisted_token);

    try {
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunk_api.rejectWithValue(error.response.data.message);
    }
  }
);
