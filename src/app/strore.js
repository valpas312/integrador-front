//imports de redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import de reducers
import tokenSlice from "../features/token/tokenSlice";
import userSlice from "../features/user/userSlice";

//configuracion de persistencia
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["x-token"]
};

//combine de reducers
const reducers = combineReducers({
    token: tokenSlice,
    user: userSlice,
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