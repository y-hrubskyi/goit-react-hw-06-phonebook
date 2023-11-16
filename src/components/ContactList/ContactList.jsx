import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filterSlice';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { filterContacts } from 'helpers/filterContacts';

import { Button, ContactData, ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filterContacts(contacts, filter);
  const contactList = filteredContacts.map(contact => (
    <li key={contact.id}>
      <ContactData>
        {contact.name}: {contact.number}
      </ContactData>
      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </li>
  ));

  return (
    <>
      <ContactsList>{contactList}</ContactsList>
    </>
  );
};
