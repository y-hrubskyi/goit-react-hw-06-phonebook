import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdEdit, MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/contactsSlice';

import { EditContact } from 'components/EditContact/EditContact';
import { ContactWrapper, ContactData, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteContactFoo = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Contact successfully deleted');
  };

  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  };

  return (
    <li>
      <ContactWrapper>
        <ContactData>
          {contact.name}: {contact.number}
        </ContactData>
        <div>
          <Button type="button" onClick={toggleModal} aria-label="edit contact">
            <MdEdit size={22} />
          </Button>{' '}
          <Button
            type="button"
            onClick={() => deleteContactFoo(contact.id)}
            aria-label="delete contact"
          >
            <MdDelete size={22} />
          </Button>
        </div>
      </ContactWrapper>
      {modalIsOpen && (
        <EditContact
          contact={contact}
          isOpen={modalIsOpen}
          onClose={toggleModal}
        />
      )}
    </li>
  );
};
