import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {

  constructor() {
    super()
    this.onInputChange = this.onInputChange.bind(this)
    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
    this.state = {}
  }

  componentWillMount() {
    this.setState({ value: this.props.value })
  }

  cancel() {
    this.setState({ value: this.props.value })
    this.props.onCloseModal()
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }


  save() {
    this.props.updateValue(this.state.value)
    this.props.onCloseModal()
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <div className="closeButton">
            <button onClick={this.cancel}>
              Close X
            </button>
          </div>
          <h3>{this.props.field}</h3>
            <input className="valueInput" type="text" value={this.state.value} onChange={this.onInputChange} />
          <button className="buttonSave" onClick={this.save}>Save</button>
          <button className="buttonCancel" onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default Modal
