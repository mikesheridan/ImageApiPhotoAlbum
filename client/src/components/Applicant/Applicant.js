import React from 'react'

const Applicant = props => {
  const appContents = []

  for (const appItem in props.appData) {
    appContents.push({
      name: appItem,
      value: props.appData[appItem]
    })
  }

  const appOutput = appContents.map(ig => {
    return (
      <td
        key={ig.name}
        style={{
          textTranform: 'capitalize',
          margin: '0 8px',
          padding: '5px'
        }}
      >
        {ig.value}
      </td>
    )
  })

  return (
    <tr>
      {appOutput}
    </tr>
  )
}

export default Applicant
