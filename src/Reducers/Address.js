const initialState = {
  address: '',
  show: false
}

const address = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ADDRESS_MODAL':
      return {
        address: state.address,
        show: true
      }
    case 'HIDE_ADDRESS_MODAL':
      return {
        address: state.address,
        show: false
      }
    case 'SAVE_ADDRESS_MODAL':
      return {
        address: action.address,
        show: state.show
      }
    default:
      return state
    }
  }

export default address
