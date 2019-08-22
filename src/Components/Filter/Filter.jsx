import React from 'react';
import './Filter.css'

const Filter = ({
  children
}) => {
  return (
    <fieldset className="Filter">
      {children}
    </fieldset>
  )
}

export default Filter;