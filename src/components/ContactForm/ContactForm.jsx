import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import { Button, Form, FormGroup, Field } from './ContactForm.styled';
import { addContact, getContacts } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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

  const handleSubmit = (values, actions) => {
    const isAlreadyAdded = onAddContact(values);
    if (!isAlreadyAdded) {
      actions.resetForm();
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form>
        <FormGroup>
          Name
          <Field type="text" name="name" required />
        </FormGroup>

        <FormGroup>
          Number
          <Field type="tel" name="number" required />
        </FormGroup>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
