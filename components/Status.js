import React from 'react'
import {connect} from 'react-redux'

const Status = ({
  flashes
}) => {

  const selected = flashes.filter(t => t.selected);
  const selectedRed = selected.filter(t => t.color === 'danger');
  const selectedGreen = selected.filter(t => t.color === 'success');

  return(
    <span>Количество блоков
      <span className="all">Bсего: {flashes.length}</span>
        {selected.length > 0 &&
            <span className="selected">Выделенных: {selected.length}
              {selectedRed.length > 0 &&
                  <span className="red">Красных: {selectedRed.length}</span>
              }
              {selectedGreen.length> 0 &&
                  <span className="green">Зеленых: {selectedGreen.length}</span>
              }
            </span>
        }
      </span>
  );
}

const mapStateToProps = ({
  flashes
}) => ({
  flashes
});

export default connect(mapStateToProps)(Status);
