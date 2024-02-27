import { Title, List, Button, ListItem } from "./Contacts.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/actions";
import { getContacts } from "../../redux/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
    const stateContacts = useSelector(getContacts);
    const [contacts, setContacts] = useState(stateContacts);

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <>
            <Title>Contacts</Title>
            <List>
                {contacts.map(({ name, id, number }) => (
                    <ListItem key={id}>
                        <Button onClick={() => {
                            console.log(id);
                            return handleDeleteContact(id);
                        }}>
                            Delete
                        </Button>
                        {name}: <span>{number}</span>
                    </ListItem>
                ))}
            </List>
        </>
    );
}