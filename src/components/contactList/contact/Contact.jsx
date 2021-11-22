import PropTypes from 'prop-types';

export default function Contact({ name, number, id, remove }) {
  return (
    <li className="item">
      {name}: {number}
      <button className="rmv-btn" type="button" onClick={remove} id={id}>
        remove
      </button>
    </li>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
