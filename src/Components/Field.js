import React, { Component } from 'react'
import './Field.css'

class Field extends Component {

  render () {
    return (
      <div className="FieldContainer">
        <span className="FieldText">
          <span className="FieldTitle">{ this.props.title }</span>
          <span className="FieldDetails">{ this.props.details }</span>
          <span className="FieldTeams">
            {
              this.props.children ?
              this.props.children.map(child => (
                  <span key={child.id} className="FieldTeam" style={{display: !child.team ? 'none' : 'block' }}>{child.num}. {child.team}</span>
                )
              ) : null
            }
          </span>
        </span>
        <span className="ButtonContainer">
          <button className="FieldButton" onClick={ this.props.handleClick }>
          { this.props.buttonText }
          </button>
        </span>
      </div>
    )
  }
}

export default Field
