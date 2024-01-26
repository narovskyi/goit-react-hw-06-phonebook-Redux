import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Contacts from "components/Contacts";
import UserAddForm from "components/UserAddForm";
import Filter from "components/Filter";
import { Container, Title } from "components/Phonebook/Phonebook.styled"
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/actions";
import { deleteContact } from "../../redux/contacts/actions";

export default function Phonebook() {
    const [filter, setFilter] = useState('');
    // const [contacts, setContacts] = useState(() => {
    //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    //     if (parsedContacts) {
    //         return [...parsedContacts];
    //     }
    //     return [];
    // });
    const dispatch = useDispatch();
    const stateContacts = useSelector(getContacts);
    const [contacts, setContacts] = useState(stateContacts);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts])
    
    const addContactHandler = (values, { resetForm }) => {
        console.log(values);
        // const normilizedName = values.name.toLowerCase();
        // const sameName = contacts.filter(contact => contact.name.toLowerCase() === normilizedName);
        // if (sameName.length > 0) {
        //     alert(`${sameName[0].name} is already in contacts`);
        //     return;
        // }
        dispatch(addContact(values));
        resetForm();
    }

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

    const filterValueHandler = (e) => {
        setFilter(e.target.value);
    }

    const deleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    // const deleteContact = (id) => {
    //     const updatedContacts = contacts.filter(contact => contact.id !== id);
    //     setContacts(updatedContacts);
    // }

    // const normilizedFilter = filter.toLowerCase();
    // const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
    return (
        <Container>
            <Title>Phonebook</Title>
            <UserAddForm
                addContact={addContactHandler}
            />
            <Filter filter={filter} onChange={filterValueHandler}/>
            <Contacts contacts={contacts} onClick={deleteContact}/>
        </Container>
    );
};