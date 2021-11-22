import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    addContactHandler: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  inputHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.addContactHandler(name, number);

    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label className={s.label}>
          <span className={s.name}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.inputHandler}
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.name}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.inputHandler}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
