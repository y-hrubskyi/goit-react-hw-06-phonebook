import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  );
};
