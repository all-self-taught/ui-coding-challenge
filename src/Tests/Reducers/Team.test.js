import teams from '../../Reducers/Teams'

const initialState = {
  show: false,
  teams: [
    {
      id: 'team0',
      num: 1,
      team: ''
    },
    {
      id: 'team1',
      num: 2,
      team: ''
    },
    {
      id: 'team2',
      num: 3,
      team: ''
    }
  ]
}


describe('team reducer tests', () => {

  it('Should handle intitial State', () => {
    expect(teams(undefined, {})).toEqual(
      initialState
    )
  })

  it('Should handle show team modal', () => {
    expect(teams(undefined, {type: 'SHOW_TEAM_MODAL'})).toEqual({
      show: true,
      teams: initialState.teams
    })
  })

  it('Should handle hide team modal', () => {
    expect(teams(undefined, {type: 'HIDE_TEAM_MODAL'})).toEqual({
      show: false,
      teams: initialState.teams
    })
  })

  it('Should handle add team', () => {
    expect(teams(undefined, {type: 'ADD_TEAM', id: 'team3', num: 4, team: 'Rangers'})).toEqual({
      show: initialState.show,
      teams: [
        ...initialState.teams,
        {
          id: 'team3',
          num: 4,
          team: 'Rangers'
        }
      ]
    })
  })

  it('Should handle edit team', () => {
    expect(teams(undefined, {type: 'EDIT_TEAM', id: 'team0', num: 1, team:'Islanders'})).toEqual({
      show: initialState.show,
      teams: [
        {
          id: 'team0',
          num: 1,
          team: 'Islanders'
        },
        {
          id: 'team1',
          num: 2,
          team: ''
        },
        {
          id: 'team2',
          num: 3,
          team: ''
        }
      ]
    })
  })

})
