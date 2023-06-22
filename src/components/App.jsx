import { ContactList } from './contactList/contactList';
import { Filter } from './Filter/Filter';

import ContactForm from './contactForm/contactForm';
import css from './App.module.css';

function App() {
  return (
    <div className={css.appDiv}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
