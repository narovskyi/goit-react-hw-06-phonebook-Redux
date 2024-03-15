import React, { useState, useEffect } from "react";
import Contacts from "components/Contacts";
import UserAddForm from "components/UserAddForm";
import Filter from "components/Filter";
import { Container, Title } from "components/Phonebook/Phonebook.styled"
import { useDispatch } from "react-redux";

export default function Phonebook() {
    const [filter, setFilter] = useState('');
    // const [contacts, setContacts] = useState(() => {
    //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    //     if (parsedContacts) {
    //         return [...parsedContacts];
    //     }
    //     return [];
    // });
    // const dispatch = useDispatch();
    
    // const addContactHandler = (values, { resetForm }) => {
    //     console.log(values);
    //     // const normilizedName = values.name.toLowerCase();
    //     // const sameName = contacts.filter(contact => contact.name.toLowerCase() === normilizedName);
    //     // if (sameName.length > 0) {
    //     //     alert(`${sameName[0].name} is already in contacts`);
    //     //     return;
    //     // }
    //     dispatch(addContact(values));
    //     resetForm();
    // }

    // const addContactHandler = (values, { resetForm }) => {
    //     const normilizedName = values.name.toLowerCase();
    //     const sameName = contacts.filter(contact => contact.name.toLowerCase() === normilizedName);
    //     if (sameName.length > 0) {
    //         alert(`${sameName[0].name} is already in contacts`);
    //         return;
    //     }
    //     setContacts(prevContacts => [
    //         ...prevContacts,
    //         {
    //             id: nanoid(),
    //             ...values
    //         }]);
    //     resetForm();
    // }

    // const deleteContact = (id) => {
    //     const updatedContacts = contacts.filter(contact => contact.id !== id);
    //     setContacts(updatedContacts);
    // }

    // const normilizedFilter = filter.toLowerCase();
    // const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));

    return (
        <Container>
            <Title>Phonebook</Title>
            <UserAddForm />
            <Filter />
            {/* filter={filter} onChange={filterValueHandler} */}
            <Contacts />
        </Container>
    );
};