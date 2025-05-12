import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunk_api) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunk_api.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunk_api) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error) {
      return thunk_api.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contact_id, thunk_api) => {
    try {
      const response = await axios.delete(`/contacts/${contact_id}`);
      return response.data;
    } catch (error) {
      return thunk_api.rejectWithValue(error.message);
    }
  }
);
