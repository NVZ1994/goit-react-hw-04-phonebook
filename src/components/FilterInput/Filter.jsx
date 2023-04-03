import PropTypes from 'prop-types';

function Filter({ onChange }) {
  return (
    <label className="Form__label">
      Find a contact by name
      <input
        className="Form__input"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={event => onChange(event)}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
