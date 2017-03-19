import React from 'react'
import Add from './Add'
import Status from './Status'

const Header = () => (
  <div className="row">
    <div className="col-md-12 form-group header">
      <div className="panel panel-default">
        <div className="panel-body">
          <Add />
          <Status />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
