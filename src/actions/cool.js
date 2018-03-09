// @flow

const coolAction = (val: string) => ({
  type: 'COOL_ACTION',
  cool: val,
})

const otherAction = (val: number, val2: string) => ({
  type: 'OTHER_ACTION',
  other: val,
  val2,
})

export type CoolAction = $Call<typeof coolAction, string>
type RetOther = $Call<typeof otherAction, number, string>

type Action = CoolAction | RetOther

// type Action =
//   | {
//       type: 'COOL_ACTION',
//       cool: string,
//     }
//   | { type: 'OTHER_ACTION', other: number }

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
