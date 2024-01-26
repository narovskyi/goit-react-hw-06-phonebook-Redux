import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [
    { "id": "oI2HrE-aPvgH8Yl8hyVa1", "name": "aleshka", "number": "634636" },
    { "id": "oI2HrE-aPvgH8Yl8hyVa2", "name": "akrolka", "number": "634636" },
    { "id": "NTSHxYMhEeOk4EQQd2Uux", "name": "qtwqte", "number": "123123" },
    { "id": "ScJPikFZltqgVO6sjx1pg", "name": "qwe", "number": "123123" }
  ],
    filter: ''
}

function rootReducer(state = initialState, action) { 
  return state;
}

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);


  // Actions 
//   { type: 'contacts/addedContact', payload: {contactName, contactNumber, id}}
//   { type: 'contacts/deletedContact', payload: id}