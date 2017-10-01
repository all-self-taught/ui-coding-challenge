import { connect } from 'react-redux'
import { showNameModal } from '../Actions'
import { showAddressModal } from '../Actions'
import { showTeamModal } from '../Actions'
import FieldListComp from '../Components/FieldList'

const mapStateToProps = (state) => ({
  name: state.Name.name,
  address: state.Address.address,
  teams: state.Teams.teams
})

const mapDispatchToProps = (dispatch) => ({
  onEditName: () => {
    dispatch(showNameModal())
  },
  onEditAddress: () => {
    dispatch(showAddressModal())
  },
  onAddTeams: () => {
    dispatch(showTeamModal())
  }
})

const FieldList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldListComp)

export default FieldList
