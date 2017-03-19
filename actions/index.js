import loremIpsum from 'lorem-ipsum'

let nextFlashId = 0;

export const addFlash = () => {
  const maybeExtendedFlash = Math.random() > 0.5;
  const flash = {
    id: nextFlashId++,
    text: loremIpsum({
      count: 3
    }),
    selected: false
  };

  if (maybeExtendedFlash) {
    const colors = ['danger', 'success'];
    flash.color = colors[Math.floor(Math.random()*colors.length)];
  }

  return {
    type: 'ADD',
    flash
  };
}

export const deleteFlash = (id) => {
  return {
    type: 'DELETE',
    id
  }
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

