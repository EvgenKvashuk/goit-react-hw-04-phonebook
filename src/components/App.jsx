
import Form from "./Form/Form";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { useState } from "react";
import Notiflix from 'notiflix';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const names = contacts.map(contact => contact.name);
    const numbers = contacts.map(contact => contact.number)

    const newContact = { id: nanoid(), name, number };

    if (names.includes(name)) {
      Notiflix.Notify.info('is already in contacts');
    } else if (numbers.includes(number)) {
      Notiflix.Notify.info('is already in contacts');
    } else {
      setContacts(state => [...state, newContact]);
      Notiflix.Notify.success('The contact was add successfully')
    }
  }

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
    Notiflix.Notify.success('The contact was deleted successfully')
  };

  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  const NormToLowerCaseFilter = filter.toLowerCase()
  const FilteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(NormToLowerCaseFilter));

  return (
    <>
      <Form
        onSubmit={addContact}
      />

      <Filter
        valey={filter}
        onChange={changeFilter}
      />

      <ContactsList
        contacts={FilteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App;