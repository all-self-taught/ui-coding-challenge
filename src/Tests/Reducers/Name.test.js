import name from '../../Reducers/Name'

const initialState = {
  name: '',
  show: false
}

describe('name reducer tests', () => {

  it('Should handle intitial State', () => {
    expect(name(undefined, {})).toEqual(
      initialState
    )
  })

  it('Should handle show name modal', () => {
    expect(name(undefined, {type: 'SHOW_NAME_MODAL'})).toEqual({
      name: initialState.name,
      show: true
    })
  })

  it('Should handle hide name modal', () => {
    expect(name(undefined, {type: 'HIDE_NAME_MODAL'})).toEqual({
      name: initialState.name,
      show: false
    })
  })

  it('Should handle save name modal', () => {
    expect(name(undefined, {type: 'SAVE_NAME_MODAL', name: 'James'})).toEqual({
      name: 'James',
      show: initialState.show
    })
  })

})
