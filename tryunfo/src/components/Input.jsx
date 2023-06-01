import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, id, label, onInputChange, value, name, datatestid } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ datatestid }
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

Input.propTypes = {
  datatestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  name: PropTypes.string.isRequired,
};
