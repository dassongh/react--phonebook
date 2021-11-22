import React, { Component } from 'react';
import ContactForm from './components/contactForm/ContactForm';
import { nanoid } from 'nanoid';
import s from './App.module.css';
import ContactList from './components/contactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Harry Potter', number: '459-12-56' },
      { id: 'id-2', name: 'Peter Parker', number: '443-89-12' },
      { id: 'id-3', name: 'Margo Robbie', number: '645-17-79' },
      { id: 'id-4', name: 'Isaac Newton', number: '227-91-26' },
    ],
    filter: '',
  };

  removeContact = e => {
    const { contacts } = this.state;
    const removingContact = contacts.find(contact => contact.id === e.target.id);
    contacts.splice(contacts.indexOf(removingContact), 1);

    this.setState({ contacts: [...contacts] });
  };

  addContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) return alert(`${name} is already in contacts`);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  inputHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  filterVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  render() {
    const contacts = this.filterVisibleContacts().reverse();

    return (
      <div className={s.container}>
        <h2>Phonebook</h2>

        <ContactForm addContactHandler={this.addContact} />

        <h2>Contacts</h2>

        <ContactList contacts={contacts} inputHandler={this.inputHandler} remove={this.removeContact} />
      </div>
    );
  }
}

export default App;
