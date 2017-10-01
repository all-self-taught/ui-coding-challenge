import address from '../../Reducers/Address'

const initialState = {
  address: '',
  show: false
}

describe('address reducer tests', () => {

  it('Should handle intitial State', () => {
    expect(address(undefined, {})).toEqual(
      initialState
    )
  })

  it('Should handle show address modal', () => {
    expect(address(undefined, {type: 'SHOW_ADDRESS_MODAL'})).toEqual({
      address: initialState.address,
      show: true
    })
  })

  it('Should handle hide address modal', () => {
    expect(address(undefined, {type: 'HIDE_ADDRESS_MODAL'})).toEqual({
      address: initialState.address,
      show: false
    })
  })

  it('Should handle save address modal', () => {
    expect(address(undefined, {type: 'SAVE_ADDRESS_MODAL', address:'New York, NY'})).toEqual({
      address: 'New York, NY',
      show: initialState.show
    })
  })

})
