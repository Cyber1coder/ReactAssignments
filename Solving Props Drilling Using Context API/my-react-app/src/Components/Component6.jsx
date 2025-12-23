import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Component6 = () => {
  const {e} = useContext(AppContext)
  return (
    <div>
      <h4>This is e value from Component2 : {e}</h4>
    </div>
  )
}

export default Component6
