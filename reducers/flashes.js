const toggleColor = (color) => {
  return ['success', 'danger'].find(t => t !== color);
}

const flash = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return action.flash;
    case 'TOGGLE_SELECT':
      if (state.id !== action.id) {
        return state;

      }

      return {
        ...state,
        selected: !state.selected

      };
    case 'TOGGLE_COLOR':
      if (state.id !== action.id) {
        return state;

      }

      return {
        ...state,
        color: toggleColor(state.color)

      };
    default:
      return state;
  }
};

const flashes = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return [
        ...state,
        flash(undefined, action)
      ];
    case 'DELETE':
      return[
        ...state.filter(t=>t.id != action.id)
      ]
    case 'TOGGLE_SELECT':
    case 'TOGGLE_COLOR':
      return state.map(t =>
        flash(t, action)
      );

    default:
      return state;
  }
};

export default flashes;
