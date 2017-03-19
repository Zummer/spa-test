import React from 'react'
import {connect} from 'react-redux'
import {addFlash} from '../actions'

const Add = ({
  dispatch
}) =>
  <button className="btn btn-primary"
    onClick={() =>
      dispatch(addFlash())
    }>
    Добавить
  </button>
  ;

export default connect()(Add);
