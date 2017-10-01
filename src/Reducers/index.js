import { combineReducers } from 'redux'
import Name from './Name'
import Address from './Address'
import Teams from './Teams'
//import Modal from './Modal'

const sportsMag = combineReducers({
  Name,
  Address,
  Teams
})

export default sportsMag
