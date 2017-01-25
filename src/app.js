import React from 'react'
import Parser from './parser'

import styles from './app.css'

class App extends React.Component {
  state = {
    value: "a,b,\n1,\"2,222\",3\n4,,6"
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
        <p>
          <label>
            <input
              type="checkbox"
              value={this.state.headerStyling}
              onClick={this.handleStylizeClick}
            /> Stylize header
          </label>
        </p>
        <Parser input={this.state.value} headerStyling={this.state.headerStyling} />
      </div>
    )
  }

  handleTextChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleStylizeClick = (e) => {
    this.setState({headerStyling: !this.state.headerStyling})
  }
}

export default App
