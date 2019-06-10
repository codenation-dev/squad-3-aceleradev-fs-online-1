import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Base = ({ children }) => (
  <div className="base">
    {children}
  </div>
);

Base.defaultProps = {
  children: null,
};

Base.propTypes = {
  children: PropTypes.node,
};

export default Base;
