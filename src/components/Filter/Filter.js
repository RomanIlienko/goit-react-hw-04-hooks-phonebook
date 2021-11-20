import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={s.filterTitle}>
    <h2>Contacts</h2>
    <label className={s.labelStyle}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;