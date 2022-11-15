import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
// import { store } from "redux/store";
import { fetchContacts, addContact, removeContact } from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.loading = true;
            store.error = payload;
        },
        [addContact.pending]: (store) => {
            store.loading = true;
        },
        [addContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload);
        },
        [addContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [removeContact.pending]: (store) => {
            store.loading = true;
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload);
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
    }
})

export default contactsSlice.reducer;



// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: [],
//     reducers: {
//         addContact: {
//             reducer: (store, {payload}) => {
//             store.push(payload);
//         },
//         prepare: (data) => {
//             return {
//                 payload: {
//                     ...data,
//                     id: nanoid()
//                 }
//             }
//         }
//     },
//         removeContact: (store, { payload }) => store.filter(({id}) => id !== payload)
//     }
// })

// export const { addContact, removeContact } = contactsSlice.actions;

// export default contactsSlice.reducer;