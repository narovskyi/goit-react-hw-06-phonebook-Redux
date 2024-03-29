import { nanoid } from "nanoid";

export const addContact = values => {
    return { 
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            ...values
        }
    }
}

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const setFilter = filterValue => {
  return {
    type: "filter/setFilter",
    payload: filterValue
  }
}