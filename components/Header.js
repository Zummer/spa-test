import React from 'react'
import Add from './Add'
import Status from './Status'

const Header = () => (
  <div className="row">
    <div className="col-md-12 form-group header">
      <Add />
      <Status />
    </div>
  </div>
);

export default Header;
