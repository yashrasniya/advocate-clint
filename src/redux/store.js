import { createStore } from "redux";
import reducers from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key:"user",
    storage
}
// const persistConfig = {    
//     key:"persist-store",
//     storage
// }

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, {},    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const persistedStore = persistStore(store)

export default store;