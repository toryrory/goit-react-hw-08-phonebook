import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Form/ContactForm.styled';
import { Contact, Text } from './ContactItem.styled';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <Contact key={id}>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
