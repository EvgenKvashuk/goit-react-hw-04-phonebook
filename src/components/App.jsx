
import Form from "./Form/Form";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { useState } from "react";

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const names = contacts.map(contact => contact.name);
    const numbers = contacts.map(contact => contact.number)

    const newContact = { id: nanoid(), name, number };

    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
    } else if (numbers.includes(number)) {
      alert(`${number} is already in contacts`);
    } else {
      setContacts(state => [...state, newContact]);
    }
  }

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
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