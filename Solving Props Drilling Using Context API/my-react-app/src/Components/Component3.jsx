import React, { useContext } from 'react'
import Component4 from './Component4'
import { AppContext } from '../Context/AppContext'

const Component3 = () => {
  const {a,b} = useContext(AppContext)
  return (
    <div>
      <h4>This is a value : {a}  </h4>
      <h4>This is b value : {b}  </h4>
      <Component4 />
    </div>
  )
}

export default Component3
