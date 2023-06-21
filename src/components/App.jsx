import { nanoid } from 'nanoid';
import { ContactList } from './contactList/contactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactClice';
import { setFilter } from 'redux/filterClice';
import { getFilter, getContactsList } from 'redux/selectors';
import ContactForm from './contactForm/contactForm';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList);

  const filter = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const addContacts = data => {
    data.id = nanoid();
    const nameToLowerCase = data.name.toLowerCase();
    const contacts = contactsList.find(
      contact =>
        contact.name.toLowerCase === nameToLowerCase ||
        contact.number === data.number
    );

    if (contacts) {
      alert(`${data.name} або ${data.number} вже є в телефонній книзі`);
      return;
    } else {
      dispatch(addContact(data));
    }
  };

  return (
    <div className={css.appDiv}>
      <ContactForm onSubmit={addContacts} />
      <h3>Телефонна книга: {contactsList.length}</h3>
      <Filter value={filter} onChange={changeFilter} />

      {contactsList.length ? (
        <ContactList contacts={getVisibleContacts()} />
      ) : (
        <p>На жаль у тебе не має контактів</p>
      )}
    </div>
  );
}

export default App;
