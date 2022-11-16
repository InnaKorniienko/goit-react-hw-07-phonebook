import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';
import { combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter']
}

const reducer = combineReducers({ contacts: contactsSlice,
filter: filterSlice});

const persistedContactsReducer = persistReducer(contactsPersistConfig, reducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }), 
});

export const persistor = persistStore(store)