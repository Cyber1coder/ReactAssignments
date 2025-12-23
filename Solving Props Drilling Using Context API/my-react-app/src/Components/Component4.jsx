import React, { useContext } from 'react'
import Component5 from './Component5'
import { AppContext } from '../Context/AppContext'

const Component4 = () => {
  const{c,d} = useContext(AppContext)
  return (
    <div>
      <h4>This is c value from Component2 : {c}</h4>
      <h4>This is d value from Component2 : {d}</h4>
      <Component5 />
    </div>
  )
}

export default Component4
