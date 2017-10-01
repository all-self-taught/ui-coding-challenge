import { connect } from 'react-redux'
import { closeTeamModal, addTeam, editTeam } from '../Actions'
import ModalTeam from '../Components/ModalTeam'

const mapStateToProps = (state) => ({
  field: 'Add Teams',
  teams: state.Teams.teams,
  show: state.Teams.show
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCloseModal: () => {
    dispatch(closeTeamModal())
  },
  insertTeam: (team) => {
    dispatch(addTeam(team))
  },
  editTeams: (teams) =>{
    Object.keys(teams).map((key, value) => {
      dispatch(editTeam({id: key, team: teams[key]}))
    })
  }
})

const TeamModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTeam)

export default TeamModal
