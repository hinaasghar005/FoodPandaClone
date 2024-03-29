



// import {configureStore} from '@reduxjs/toolkit';
// import {persistStore} from 'redux-persist';
//  import rootReducer from './reducer';

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       immutableCheck: false,
//       serializableCheck: false,
//     })
// });

// export const persistor = persistStore(store);


import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import userReducer from './reducers/userReducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import reducer from './reducer';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const reducers = combineReducers({
    user: reducer,
  
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: {
        root: persistedReducer,
      },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

