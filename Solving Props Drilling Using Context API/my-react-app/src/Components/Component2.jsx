import React, { useContext } from 'react'
import Component3 from './Component3'
import { AppContext } from '../Context/AppContext'

const Component2 = () => {

  const {a,b}=useContext(AppContext)
  return (
    <div>
      <h4>This is a value from Component2 : {a}</h4>
      <h4>This is b value from Component2 : {b}</h4>
      <Component3 />
    </div>
  )
}

export default Component2
