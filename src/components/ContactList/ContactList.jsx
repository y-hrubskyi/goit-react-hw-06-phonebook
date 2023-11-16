import { Button, ContactData, ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  const contactList = contacts.map(contact => (
    <li key={contact.id}>
      <ContactData>
        {contact.name}: {contact.number}
      </ContactData>
      <Button type="button" onClick={() => onDeleteContact(contact.id)}>
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
