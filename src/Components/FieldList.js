import React, { Component } from 'react'
import Field from './Field'
import NameModal from '../Containers/NameModal'
import AddressModal from '../Containers/AddressModal'
import TeamModal from '../Containers/TeamModal'

class FieldList extends Component {

  render() {
    return (
      <div className="FieldList">
        <Field title="Name" handleClick={ this.props.onEditName } details={this.props.name} buttonText="Edit Name" />
        <Field title="Address" handleClick={ this.props.onEditAddress } details={this.props.address} buttonText="Edit Address" />
        <Field title="Favourite Teams" handleClick={ this.props.onAddTeams } buttonText="Add Teams">
          {this.props.teams}
        </Field>
        <NameModal name={this.props.name} />
        <AddressModal address={this.props.address} />
        <TeamModal teams={this.props.teams} />
      </div>
    )
  }
}

export default FieldList
