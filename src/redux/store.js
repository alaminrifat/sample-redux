import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./slice";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    FLUSH,
} from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    whitelist: ["todos"],
};
const rootReducer = combineReducers({
    todos: todoReducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
