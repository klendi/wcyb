import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import loadingBarReducer from './loadingBarReducer'

export default combineReducers({
  itemsReducer,
  loadingBarReducer
})
