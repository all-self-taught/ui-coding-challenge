import { connect } from 'react-redux'
import { closeAddressModal, saveAddress } from '../Actions'
import Modal from '../Components/Modal'

const mapStateToProps = (state) => ({
  field: 'Edit Address',
  value: state.Address.address,
  show: state.Address.show
})

const mapDispatchToProps = (dispatch) => ({
  onCloseModal: () => {
    dispatch(closeAddressModal())
  },
  updateValue: (value) => {
    dispatch(saveAddress(value))
  }
})

const AddressModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default AddressModal
