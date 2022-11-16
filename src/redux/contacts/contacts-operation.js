import * as api from "../../components/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkApi) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
    )

export const addContact = createAsyncThunk(
    "contact/add",
    async({ name, phone }, {rejectWithValue}) => {
        try {
            const result = await api.addContact({name, phone});
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const removeContact = createAsyncThunk(
    "contact/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeContact(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);