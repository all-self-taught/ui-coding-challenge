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

const teams = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TEAM_MODAL':
      return {
        show: true,
        teams: state.teams
      }
    case 'HIDE_TEAM_MODAL':
        return {
          show: false,
          teams: state.teams.filter(t => t.team || t.num < 4)
        }
    case 'EDIT_TEAM':
      let teams = state.teams.map(team =>
        (team.id === action.id) ? {...team, team: action.team} : team
      )
      return {
        show: state.show,
        teams: teams
      }

    case 'ADD_TEAM':
      return {
        show: state.show,
        teams: [
          ...state.teams,
          {
            id: action.id,
            num: state.teams.length + 1,
            team: action.team
          }
        ]
      }
    default:
      return state
  }
}

export default teams
