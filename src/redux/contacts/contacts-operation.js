// import actions from "./contacts-action";
import * as api from "../../components/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import Notiflix from "notiflix";


// const isDublicate = ({ name, phone }, contacts) => {
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = phone.toLowerCase();
//     const result = contacts.find(item => {
//         return (normalizedName === item.name.toLowerCase() || normalizedNumber === item.phone.toLowerCase())
//     }
// );
//     return result;
// }

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

// export const fetchContacts = () => {
//     const func = async (dispatch) => {
//         dispatch(actions.fetchContactsLoading());
//         try {
//             const data = await api.getContacts();
//             dispatch(actions.fetchContactsSucess(data));
//         } catch(error) {
//             const { message, response } = error;
//             const errorDate = {
//                 message,
//                 status: response.status,
//             }
//             dispatch(actions.fetchContactsError(errorDate));
//         }
//     }

//     return func;
// }

export const addContact = createAsyncThunk(
    "contact/add",
    async(data, {rejectWithValue}) => {
    try {
        const result = await api.addContact(data);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
},
// {
//     condition: (data, { getState }) => {
//         const { contacts } = getState();
//         if(isDublicate(data, contacts.items)) {
//             return Notiflix.Notify.warning(`${data.name} or ${data.phone} is already in contact`)
//         }
//         return;
//     }
// }
)

// export const addContact = (data) => {
//     const func = async (dispatch, getState) => {
//         const { contacts }  = getState();
//         if(isDublicate(data, contacts.items)) {
//             return Notiflix.Notify.warning(`${contacts.name} or ${contacts.number} is already in contact`);
//         }  
//         try {
//             dispatch(actions.addContactLoading());
//             const result = await api.addContact(data);
//             dispatch(actions.addContactSucess(result));
//         } catch(error) {
//             const { message, response } = error;
//             const errorDate = {
//                 message,
//                 status: response.status,
//             }
//             dispatch(actions.addContactError(errorDate));
//         }
//     }
//     return func;
// }


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

// export const removeContact = (id) => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(actions.removeContactLoading());
//             await api.removeContact(id);
//             dispatch(actions.removeContactSucess(id));
//         } catch(error) {
//             const { message, response } = error;
//             const errorDate = {
//                 message,
//                 status: response.status,
//             }
//             dispatch(actions.removeContactError(errorDate));
//         }
//     }
//     return func;
// }