import React from 'react'
import Header from '../../Components/Header'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() });

describe('Header displays properly', () => {

  it('it displays "Sports Magazine Settings"', () => {

    const header = shallow(<Header />)
    const text = header.find('h1').text()
    expect(text).toEqual("Sports Magazine Settings")

  })

})
