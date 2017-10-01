import React from 'react'
import Field from '../../Components/Field'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() });

describe('Field displays properly', () => {

  const simulateClick = sinon.spy()

  it('Shows props in the proper place', () => {
    const field = shallow(<Field title="Name" details="James" handleClick={simulateClick} buttonText="Edit Name" />)
    const text = field.find('.FieldTitle').text()
    const details = field.find('.FieldDetails').text()
    const buttonText = field.find('button').text()
    expect(text).toEqual('Name')
    expect(details).toEqual('James')
    expect(buttonText).toEqual('Edit Name')
  })

  it('Shows teams in the proper place if rendered', () => {

    const fieldTeams = shallow(
      <Field title="Teams" handleClick={simulateClick} buttonText="Add Teams">
        {[
            {
              id: 'team0', num: 1, team:'Yankees'
            },
            {
              id: 'team1', num: 2, team: 'Rangers'
            },
            {
              id: 'team2', num: 3, team: 'Mets'
            }
        ]}
      </Field>
    )

    const teams = fieldTeams.find('span.FieldTeam').length
    expect(teams).toEqual(3)
    const yankees = fieldTeams.find('span.FieldTeam').first().text()
    expect(yankees).toEqual('1. Yankees')
    const rangers = fieldTeams.find('span.FieldTeam').at(1).text()
    expect(rangers).toEqual('2. Rangers')
    const mets = fieldTeams.find('span.FieldTeam').at(2).text()
    expect(mets).toEqual('3. Mets')


  })

  it('Simulates Click Events', () => {
    const field = shallow(<Field title="Name" details="James" handleClick={simulateClick} buttonText="Edit Name" />)
    field.find('button').simulate('click')
    expect(simulateClick.callCount).toEqual(1)
  })
})
