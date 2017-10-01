import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {

  constructor() {
    super()
    this.onInputChange = this.onInputChange.bind(this)
    this.addTeam = this.addTeam.bind(this)
    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
    this.state = {}
  }

  componentWillMount() {
    this.props.teams.map(team => {
      this.setState({ [team.id]: team.team })
    })
  }

  addTeam() {
    //adds a team to the local state and to the redux store
    let nextId = Object.keys(this.state).length
    let newState = {}
    let newId = 'team' + nextId
    newState[newId] = ''
    this.setState(newState)
    this.props.insertTeam({id: newId, num: nextId, team: ''})
  }

  cancel() {
    //restore local state to equal state from redux store
    this.props.teams.map(team => {
      if (!team.team && team.num > 3) {
        delete this.state[team.id]
      } else {
        this.state[team.id] = team.team
      }
    })
    this.props.onCloseModal()
  }

  onInputChange(event) {
    //This function exists otherwise the input fields would be read only
    let newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }


  save() {
    //save the teams to the redux store
    this.props.editTeams(this.state)
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
          <div className="scroll">
            {Object.keys(this.state).map((key) => {
                return (<div key={'div'+key}><span key={'span'+key}>{'Team ' + (parseInt(key.replace('team', '')) + 1) + ':'} </span><input className="valueInput valueSpace" type="text" key={key} id={key} value={this.state[key]} onChange={this.onInputChange} /></div>)
              })
            }
          </div>
          <div><button className="addTeam" onClick={this.addTeam}>+ Add Another</button></div>
          <button className="buttonSave" onClick={this.save}>Save</button>
          <button className="buttonCancel" onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default Modal
