import React from 'react'
import {connect} from 'react-redux'
import SimpleFlash from './SimlpeFlash'
import ExtendedFlash from './ExtendedFlash'

const List = ({
  flashes,
  dispatch
}) =>
  <div className="row">
    <div className="col-md-12 form-group">
      <ul className='flash-list'>
        {flashes.map((flash, i) => {
          if('color' in flash) {
            return (
              <ExtendedFlash key={i} {...flash} />
            );
          } else {
            return (
              <SimpleFlash key={i} {...flash} />
            );
          }
        }
        )}
      </ul>
    </div>
  </div>
  ;

const mapStateToProps = ({
  flashes
}) => ({
  flashes
});

export default connect(mapStateToProps)(List);
