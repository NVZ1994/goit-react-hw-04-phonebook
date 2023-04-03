import PropTypes from 'prop-types';
import React, { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = state;
    onSubmit(contact);
    reset(event);
  };

  const reset = (event) => {
    setState({ ...INITIAL_STATE });
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="Form__label">
        Name
        <input
          className="Form__input"
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="Form__label">
        Phone number
        <input
          className="Form__input"
          type="tel"
          name="phone"
          value={state.phone}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className="Form__btn">
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
