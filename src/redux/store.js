import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = devToolsEnhancer();

export let store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);