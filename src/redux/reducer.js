import { combineReducers } from "redux";

const contactsInitialState = []

const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case "contacts/addContact": {
            const normilizedName = action.payload.name.toLowerCase();
            const sameName = state.filter(contact => contact.name.toLowerCase() === normilizedName);
            if (sameName.length > 0) {
                alert(`${action.payload.name} is already in contacts`);
                return state;
            }
            const newState = [...state, action.payload ];
            return newState;
        }  
        case "contacts/deleteContact": {
            const editedState = state.filter(contact => contact.id !== action.payload); 
            return editedState;
        }   
        default:
            return state;
    }
}

let filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case "filter/setFilter":
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