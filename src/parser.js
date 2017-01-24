import React from 'react'
import styles from './parser.css'

class Parser extends React.Component {
  render () {
    const {input} = this.props
    let result = []

    const lines = input.split('\n')
    for (var i  in lines) {
      let row = []
      let items = lines[i].split(/,/)
      for (var j in items) {
        row.push(<td key={i + '' + j} className={styles.td}>{items[j]}</td>)
      }
      result.push(<tr key={i}>{row}</tr>)
    }

    return (
      <table className={styles.table}><tbody>{result}</tbody></table>
    )
  }
}

export default Parser