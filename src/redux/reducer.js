import { combineReducers } from "redux";

const contactsInitialState = [
    { "id": "zxc124HrE-dfsdfsdfe24", "name": "aleshka", "number": "634636" },
    { "id": "oI2HrE-aPvgH8Yl8hyVa2", "name": "akrolka", "number": "634636" },
    { "id": "NTSHxYMhEeOk4EQQd2Uux", "name": "qtwqte", "number": "123123" },
    { "id": "ScJPikFZltqgVO6sjx1pg", "name": "qwe", "number": "123123" }
]

const contactsReducer = (state = contactsInitialState, action) => {
    console.log(action.type);
    console.log(state);
    switch (action.type) {
        case "contacts/deleteContact": {
            console.log('deleteCase');
            const editedState = state.filter(contact => contact.id !== action.payload); 
            console.log(editedState);
            return editedState;
        }   
        case "contacts/addContact": {
            console.log('add');
            console.log(action.payload);
            const newState = [...state, action.payload ];
            return newState;
        }      
        default:
            console.log('default');
            return state;
    }
}

let filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case "filter/setFilter":
            console.log(state);
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});