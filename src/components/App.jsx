import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { GlobalStyle } from 'components/GlobalStyle';
import { AppWrapper } from 'components/App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppWrapper>
  );
};
