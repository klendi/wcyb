import { SET_LOADING_BAR_PROGRESS } from '../actions/types'

const initialState = {
  progress: 0
}

export default function loadingBar(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_BAR_PROGRESS:
      state.progress = action.payload

      return { ...state }

    default:
      return state
  }
}
