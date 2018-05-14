export const increment = (value) => {
  return {
    value,
    type: 'INCREMENT'
  }
}

export const decrement = (value) => {
  return {
    value,
    type: 'DECREMENT'
  }
}
