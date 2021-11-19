import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, id: nanoid() },
      ],
    });

    e.currentTarget.reset();
  };

  inputHandler = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.submitHandler}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.inputHandler}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ul>
          <h2>Contacts</h2>

          {contacts.reverse().map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
