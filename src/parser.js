import React from 'react'
import styles from './parser.css'
import cn from 'classnames'

class Parser extends React.Component {
  render () {
    const {input, headerStyling} = this.props
    let result = []

    const lines = input.split('\n')
    for (var i  in lines) {
      let row = []

      let line = lines[i]
      // a bit ugly but the let's make be not like everyone else.
      // add a blank space before last comma for an empty value
      line = line.replace(/^,/g, ' ,')
      // add a blank space after last comma for an empty value
      line = line.replace(/,$/g, ', ')
      // add a blank space between unspaced commas for an empty value
      line = line.replace(/,,/g, ', ,')

      let items = line.match(/".*?"|[^,]+/g)
      for (var j in items) {
        let value = items[j] === ',,' ? '' : items[j]
        value = value.replace(/^"|"$/g, '')
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
