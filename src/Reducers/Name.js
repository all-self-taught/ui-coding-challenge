const initialState = {
  name: '',
  show: false
}

const name = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NAME_MODAL':
      return {
        name: state.name,
        show: true
      }
    case 'HIDE_NAME_MODAL':
      return {
        name: state.name,
        show: false
      }
    case 'SAVE_NAME_MODAL':
      return {
        name: action.name,
        show: state.show
      }
    default:
      return state
    }
  }

export default name
