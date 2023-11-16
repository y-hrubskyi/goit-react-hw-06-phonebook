import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';

import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter, setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const updateFilter = value => {
    dispatch(setFilter(value));
  };

  const onAddContact = data => {
    const formattedName = data.name.toLowerCase();
    const isAlreadyAdded = contacts.some(
      ({ name }) => name.toLowerCase() === formattedName
    );

    if (isAlreadyAdded) {
      alert(`${data.name} is already in contacts.`);
      return isAlreadyAdded;
    }

    const newContact = { ...data, id: nanoid() };
    dispatch(addContact(newContact));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    const formattedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formattedFilter)
    );
  };

  const filteredContacts = filterContacts();

  const results = filteredContacts.length;
  let filterInfo = '';
  if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
  if (!results && filter) filterInfo = <p>Not Finded</p>;

  return (
    <AppWrapper>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} filterInfo={filterInfo} onChange={updateFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </AppWrapper>
  );
};
