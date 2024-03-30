import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { selectContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filterSlice';
import { filterContacts } from 'helpers/filterContacts';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AddContact } from './AddContact/AddContact';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout, PageTitle, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = filterContacts(contacts, filter);
  const results = filteredContacts.length;

  let filterInfo = '';
  if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
  if (!results && filter) filterInfo = <p>Not Finded</p>;

  return (
    <Layout>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 1500 }} />

      <PageTitle>Phonebook</PageTitle>
      <Title>Contacts</Title>
      {contacts.length > 0 && <Filter />}
      {filteredContacts.length ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        filterInfo
      )}
      <AddContact />
    </Layout>
  );
};
