import React from 'react'
import NavBar from '../../Components/NavBar'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() });

describe('NavBar displays properly', () => {

  it('it displays "Sports Magazine"', () => {

    const header = shallow(<NavBar />)
    const text = header.find('span').text()
    expect(text).toEqual("Sports Magazine")

  })

})
