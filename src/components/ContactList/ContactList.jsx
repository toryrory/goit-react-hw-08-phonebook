import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFiltredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <ul>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
