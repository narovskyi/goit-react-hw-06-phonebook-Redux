import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);


  // Actions 
//   { type: 'contacts/addedContact', payload: {contactName, contactNumber, id}}
//   { type: 'contacts/deletedContact', payload: id}