import React, { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";

class App extends Component {
  // ==============================================================================
  state = {
    contacts: [],
    filter: '',
  }
  // ==============================================================================
  // CUSTOM METHODS:
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const names = this.state.contacts.map(contact => contact.name);
    const numbers = this.state.contacts.map(contact => contact.number);

    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
    } else if (numbers.includes(number)) {
      alert(`${number} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts]
      }));
    }

  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }
  

  componentDidUpdate(precProps, prevState,) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  // ==============================================================================
  render() {
    const { contacts, filter } = this.state

    const NormToLowerCaseFilter = this.state.filter.toLowerCase()
    const FilteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(NormToLowerCaseFilter));

    return (
      <>
        <Form
          onSubmit={this.addContact}
        />

        <Filter
          valey={filter}
          onChange={this.changeFilter}
        />

        <ContactsList
          contacts={FilteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  };
}

export default App;