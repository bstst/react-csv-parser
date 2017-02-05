import React from 'react'
import styles from './parser.css'
import cn from 'classnames'

function splitLines (input, separator = '\n') {
  return input.split(separator)
}

function splitItems (input) {
  let result

  // let's make it not like everyone else does it!
  // add a blank space before last comma for an empty value
  result = input.replace(/^,/, ' ,')
  // add a blank space after last comma for an empty value
  result = result.replace(/,$/, ', ')
  // add a blank space between unspaced commas for an empty value
  result = result.replace(/,,/g, ', ,')

  return result.match(/".*?"|[^,]+/g)
}

class Parser extends React.Component {
  render () {
    const {input, headerStyling} = this.props
    let result = []

    const lines = splitLines(input)
    for (var i  in lines) {
      let row = []
      let line = lines[i]
      let items = splitItems(line)
      for (var j in items) {
        let value = items[j]
        value = value.replace(/^"|"$|,,/g, '') // clean up certain values
        row.push(
          <td
            key={i + '-' + j}
            className={styles.td}
          >{value}</td>
        )
      }
      result.push(
        <tr
          key={i}
          className={cn(parseInt(i, 10) === 0 && headerStyling && styles.header)}
        >{row}</tr>
      )
    }

    return (
      <table className={styles.table}><tbody>{result}</tbody></table>
    )
  }
}

export default Parser
