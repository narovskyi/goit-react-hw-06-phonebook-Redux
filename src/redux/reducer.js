import { combineReducers } from "redux";

const contactsInitialState = [
    { "id": "zxc124HrE-dfsdfsdfe24", "name": "aleshka", "number": "634636" },
    { "id": "oI2HrE-aPvgH8Yl8hyVa2", "name": "akrolka", "number": "634636" },
    { "id": "NTSHxYMhEeOk4EQQd2Uux", "name": "qtwqte", "number": "123123" },
    { "id": "ScJPikFZltqgVO6sjx1pg", "name": "qwe", "number": "123123" }
]

const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case "contacts/addContact":
            console.log(contactsInitialState);
            console.log(action.payload);
            return [...state, action.payload]    
        default:
            return [...state, action.payload];
    }
}

const filterInitialState = '';

export const rootReducer = combineReducers({
    contacts: contactsReducer
});