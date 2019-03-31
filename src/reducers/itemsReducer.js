import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAIL } from '../actions/types'

const initialState = {
  itemsList: []
}

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return { ...state, itemsList: action.payload.itemsList }

    case FETCH_ITEMS_FAIL:
      return { ...state, error: action.payload }

    default:
      return state
  }
}

export default ItemsReducer
