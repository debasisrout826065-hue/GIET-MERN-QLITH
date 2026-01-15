import React from 'react'
import ChildB from './ChildB'

function ChildA(props) {
  return (
    <div>ChildA
        <br />
        Number :{props.num}
        <br />
        <ChildB num={props.num}/>
    </div>
  )
}

export default ChildA