import { connect } from 'react-redux'
import { closeNameModal, saveName } from '../Actions'
import Modal from '../Components/Modal'

const mapStateToProps = (state) => ({
  field: 'Edit Name',
  value: state.Name.name,
  show: state.Name.show
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCloseModal: () => {
    dispatch(closeNameModal())
  },
  updateValue: (value) => {
    dispatch(saveName(value))
  }
})

const NameModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default NameModal
