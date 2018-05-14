import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './store/actions'

export const Counter = ({count, increment, decrement}) => (
  <div>
    Contador: <span className='counter'>{count}</span> <br />
    <button className='increment' onClick={ () => increment(10) }>+</button>
    <button className='decrement' onClick={ () => decrement(10) }>-</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
