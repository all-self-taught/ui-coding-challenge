export const addTeam = (team) => ({
  type: 'ADD_TEAM',
  id: team.id,
  num: team.num,
  team: team.team
})

export const showTeamModal = () => ({
  type: 'SHOW_TEAM_MODAL'
})

export const editTeam = (team) => ({
  type: 'EDIT_TEAM',
  id: team.id,
  num: team.num,
  team: team.team
})

export const closeTeamModal = () => ({
  type: 'HIDE_TEAM_MODAL'
})

export const saveName = (name) => ({
  type: 'SAVE_NAME_MODAL',
  name
})

export const showNameModal = () => ({
  type: 'SHOW_NAME_MODAL'
})

export const closeNameModal = () => ({
  type: 'HIDE_NAME_MODAL'
})

export const saveAddress = (address) => ({
  type: 'SAVE_ADDRESS_MODAL',
  address
})

export const showAddressModal = () => ({
  type: 'SHOW_ADDRESS_MODAL'
})

export const closeAddressModal = () => ({
  type: 'HIDE_ADDRESS_MODAL'
})
