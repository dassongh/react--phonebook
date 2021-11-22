import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
