// @flow

import type { Action } from '../types'

const reducer = (state: { cool: string, other: number }, action: Action) => {
  switch (action.type) {
    case 'COOL_ACTION':
      return {
        ...state,
        cool: action.cool,
      }
    case 'OTHER_ACTION':
      return {
        ...state,
        cool: action.val2,
        other: action.other,
      }
    default:
      return state
  }
}

export default reducer
