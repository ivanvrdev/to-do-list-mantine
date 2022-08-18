import React from 'react'

const Row = (props) => {
  return (
    <tr>
        <th>{props.id}</th>
        <th>{props.title}</th>
        <th>{props.completed ? 'completo' : 'incompleto'}</th>
    </tr>
  )
}

export default Row