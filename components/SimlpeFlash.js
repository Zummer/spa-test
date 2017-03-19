import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {
  deleteFlash,
  toggleSelectFlash
} from '../actions'

const SimpleFlash = ({
  id,
  initialClass = 'flash alert alert-info',
  text,
  selected,
  show,
  dispatch,
  clickTimeout,
  onDeleteClick = () => dispatch(deleteFlash(id)),
  onDoubleClick = () => clearTimeout(clickTimeout),
  onClick = () => {
    clearTimeout(clickTimeout);
    clickTimeout = setTimeout(() =>
      dispatch(toggleSelectFlash(id)), 300);
  }
}) => {

  return (
    <li className={classNames(initialClass, {
      selected,
      show
    })}
    onDoubleClick={onDoubleClick}
    onClick={onClick}>
    <button className="close"
      onMouseDown={onDeleteClick}>
      <span>&times;</span>
    </button>
    {text}
  </li>
 );
}
SimpleFlash.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  initialClass: React.PropTypes.string,
  onDeleteClick: React.PropTypes.func,
  onClick: React.PropTypes.func,
  onDoubleClick: React.PropTypes.func,
  clickTimeout: React.PropTypes.any
}

export default connect()(SimpleFlash);
