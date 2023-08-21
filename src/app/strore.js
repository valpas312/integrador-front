//imports de redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import de reducers
import counterSlice from "../features/counter/counterSlice";

//configuracion de persistencia
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["counter"]
};

//combine de reducers
const reducers = combineReducers({
    counter: counterSlice
});

//creacion de store
export const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    //middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

//creacion de persistor
export const persistor = persistStore(store);