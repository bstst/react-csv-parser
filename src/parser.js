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
      let items = lines[i].split(/,/)
      for (var j in items) {
        row.push(
          <td
            key={i + '' + j}
            className={styles.td}
          >{items[j]}</td>
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