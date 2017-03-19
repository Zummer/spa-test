import loremIpsum from 'lorem-ipsum'

let nextFlashId = 0;

export const showFlash = (id) => {
  return {
    type: 'SHOW',
    id
  }
}

export const hideFlash = (id) => {
  return {
    type: 'HIDE',
    id
  }
}


export const addFlash = () => (dispatch) => {
  const maybeExtendedFlash = Math.random() > 0.5;
  const flash = {
    id: nextFlashId++,
    text: loremIpsum({
      count: 3
    }),
    selected: false,
    show: false
  };

  if (maybeExtendedFlash) {
    const colors = ['danger', 'success'];
    flash.color = colors[Math.floor(Math.random()*colors.length)];
  }

  dispatch({
    type: 'ADD',
    flash
  });

  setTimeout(() => dispatch(showFlash(flash.id)), 10);

}

export const deleteFlash = (id) => (dispatch) => {
  dispatch(hideFlash(id));

  setTimeout(() =>
    dispatch({
      type: 'DELETE',
      id
    }), 300);

}

export const toggleSelectFlash = (id) => {
  return {
    type: 'TOGGLE_SELECT',
    id
  }
}

export const toggleColor = (id) => {
  return {
    type: 'TOGGLE_COLOR',
    id
  }
}

