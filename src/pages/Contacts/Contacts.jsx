import {
  Container,
  Section1,
  Section2,
  Spinner,
  Title,
} from './Contacts.styled';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactForm } from '../../components/Form/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section1>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section1>
      <Section2>
        <Title>Contacts</Title>
        <ContactFilter />
        {isLoading && !error && (
          <Spinner>
            <RotatingLines strokeColor="#f0c5ae" width="35" />
          </Spinner>
        )}
        <ContactList />
      </Section2>
    </Container>
  );
};

export default Contacts;
