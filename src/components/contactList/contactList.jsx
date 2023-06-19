import PropTypes from 'prop-types';
import css from './contactList.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactClice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  
  const deleteContactss = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.list}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteContactss(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired
};