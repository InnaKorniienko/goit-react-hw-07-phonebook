import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';


const store = configureStore({
reducer: {
  contacts: contactsSlice,
  filter: filterSlice,
}
});

export default store;