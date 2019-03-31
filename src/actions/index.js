import {
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_SUCCESS,
  SET_LOADING_BAR_PROGRESS
} from './types'

import axios from 'axios'
import store from '../store'
import { endTheBar } from '../utils/startStopTheBar'
const baseURL = process.env.REACT_APP_BASE_URL_API || 'http://localhost:8000'

export const fetchItems = value => {
  console.log('this got called firing axios', value)
  return axios
    .get(`${baseURL}/price/${value}`)
    .then(({ data }) => {
      console.log('got data', data)
      endTheBar()
      store.dispatch(fetchItemsSuccess(data))
    })
    .catch(err => {
      console.log(err)
      store.dispatch(fetchItemsFail(err))
    })
}

const fetchItemsSuccess = itemsList => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { itemsList }
})

const fetchItemsFail = error => ({
  type: FETCH_ITEMS_FAIL,
  payload: { error }
})

export const setLoadingBarProgress = value => ({
  type: SET_LOADING_BAR_PROGRESS,
  payload: value
})
