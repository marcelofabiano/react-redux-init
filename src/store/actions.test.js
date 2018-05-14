import { increment, decrement } from './actions'

test('Action: increment', () => {
  let incr = increment(10)
  expect(incr).toEqual({
    value: 10,
    type: 'INCREMENT'
  })
})

test('Action: decrement', () => {
  let decr = decrement(20)
  expect(decr).toEqual({
    value: 20,
    type: 'DECREMENT'
  })
})
