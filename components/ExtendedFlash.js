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
        dispatch
      } = this.props;

      let clickTimeout;

      // в базовый компонент передаем только то, что нужно
      // например, color и dispatch не передаём
      const newProps = {
        id,
        selected,
        text,
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
