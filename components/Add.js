import React from 'react'
import {connect} from 'react-redux'
import {addFlash} from '../actions'

const Add = ({
  addFlash
}) =>
  <button className="btn btn-primary"
    onClick={() => addFlash()}>
    Добавить блок
  </button>
  ;

export default connect(null, {
  addFlash
})(Add);
