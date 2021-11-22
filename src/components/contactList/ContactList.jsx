import PropTypes from 'prop-types';
import Filter from './filter/Filter';
import Contact from './contact/Contact';

export default function ContactList({ contacts, inputHandler, remove }) {
  return (
    <div>
      <Filter onChange={inputHandler} />
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} remove={remove} />
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  inputHandler: PropTypes.func,
};
