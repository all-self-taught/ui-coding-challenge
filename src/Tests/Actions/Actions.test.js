import * as Actions from '../../Actions'

describe('sports mag actions', () => {

  it('addTeam should add a new team to the store', () => {
    expect(Actions.addTeam({id: 0, num: 1, team: 'Yankees'})).toEqual({
        type: 'ADD_TEAM',
        id: 0,
        num: 1,
        team: 'Yankees'
    })
  })

  it('showTeamModal should trigger the show team modal action', () => {
    expect(Actions.showTeamModal()).toEqual({
      type: 'SHOW_TEAM_MODAL'
    })
  })

  it('editTeam should edit an existing team in the store', () => {
    expect(Actions.editTeam({id: 0, num: 1, team: 'Mets'})).toEqual({
      type: 'EDIT_TEAM',
      id: 0,
      num: 1,
      team: 'Mets'
    })
  })

  it('closeTeamModal should trigger the hide team modal action', () => {
    expect(Actions.closeTeamModal()).toEqual({
      type: 'HIDE_TEAM_MODAL'
    })
  })

  it('saveName should save a name to the store', () => {
    expect(Actions.saveName('James')).toEqual({
      type: 'SAVE_NAME_MODAL',
      name: 'James'
    })
  })

  it('showNameModal should trigger the show name modal action', () => {
    expect(Actions.showNameModal()).toEqual({
      type: 'SHOW_NAME_MODAL'
    })
  })

  it('closeNameModal should trigger the close name modal action', () => {
    expect(Actions.closeNameModal()).toEqual({
      type: 'HIDE_NAME_MODAL'
    })
  })

  it('saveAddress should save an address to the store', () => {
    expect(Actions.saveAddress('New York, NY')).toEqual({
      type: 'SAVE_ADDRESS_MODAL',
      address: 'New York, NY'
    })
  })

  it('showAddressModal should trigger the show address modal action', () => {
    expect(Actions.showAddressModal()).toEqual({
      type: 'SHOW_ADDRESS_MODAL'
    })
  })

  it('closeAddressModal should trigger the close addresss modal action', () => {
    expect(Actions.closeAddressModal()).toEqual({
      type: 'HIDE_ADDRESS_MODAL'
    })
  })

})
