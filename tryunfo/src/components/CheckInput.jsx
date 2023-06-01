import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckInput extends Component {
  render() {
    const { type, id, label, onInputChange, checked, name, datatestid } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ datatestid }
          type={ type }
          id={ id }
          name={ name }
          checked={ checked }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CheckInput.propTypes = {
  datatestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
