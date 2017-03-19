import React from 'react'
import SimpleFlash from './SimlpeFlash'
import {connect} from 'react-redux'
import {
  deleteFlash,
  toggleSelectFlash,
  toggleColor
} from '../actions'

const ExtendedFlashHOC = (InnerComponent) => {
  class ExtendedFlash extends React.Component {
    render() {
      const {
        id,
        selected,
        text,
        color,
        show,
        dispatch
      } = this.props;

      let clickTimeout;

      const newProps = {
        id,
        selected,
        text,
        show,
        dispatch,
        initialClass: `flash alert alert-${color}`,
        onDeleteClick: (e) => {
          e.preventDefault();
          if(confirm("Вы действительно хотите удалить?")){
            dispatch(deleteFlash(id));
          }
        },
        onClick: () => {
          clearTimeout(clickTimeout);
          clickTimeout = setTimeout(() =>
            dispatch(toggleSelectFlash(id)), 300);
        },
        onDoubleClick: () => {
          clearTimeout(clickTimeout);
          dispatch(toggleColor(id));

        }
      }
      return (
        <InnerComponent
          {...newProps}
        />
      );
    }
  }

  ExtendedFlash.propTypes = {
    color: React.PropTypes.string.isRequired
  }

  return connect()(ExtendedFlash);
}
export default ExtendedFlashHOC(SimpleFlash);
