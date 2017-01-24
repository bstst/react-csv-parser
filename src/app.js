import React from 'react'
import Parser from './parser'

import styles from './app.css'

class App extends React.Component {
  state = {
    value: "a,b,c\n1,2,3\n4,5,6"
  }

  render () {
    return (
      <div className={styles.content}>
        <h1>A Super Simple CSV parser</h1>
        <p className={styles.warning}>
          Warning: To save time I've decided to not handle values containing quotes, e.g. 1,"2,2",3 — should be parsed to three values: "1", "2,2", "3".
          But it's a MUST, and thus a TODO: properly parse quotation marks.
        </p>
        <textarea onChange={this.handleTextChange} value={this.state.value} className={styles.text} />
        <Parser input={this.state.value} />
      </div>
    )
  }

  handleTextChange = (e) => {
    this.setState({value: e.target.value})
  }
}

export default App