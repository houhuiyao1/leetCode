import card from '../../code/array/card'

test('card:[1,2,3,4,4,3,2,1]',() => {
  expect(card([1,1,1,2,2,2,3,3])).toBe(false)
})