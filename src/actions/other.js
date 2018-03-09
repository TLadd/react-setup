// @flow

const otherAction = (val: number, val2: string) => ({
  type: 'OTHER_ACTION',
  other: val,
  val2,
})

export type OtherAction = $Call<typeof otherAction, number, string>
