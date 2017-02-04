import React from 'react'
import Parser from './parser'

import styles from './app.css'

class App extends React.Component {
  state = {
    loading: false,
    value: "a,b,\n1,\"2,222\",3\n4,,6"
  }

  render () {
    return (
      <div className={styles.content}>
        <h1>A Super Simple CSV parser</h1>
        <p>
          <input
            className={styles.input}
            ref="url"
            defaultValue="https://raw.githubusercontent.com/vilnius/darzeliai/master/data/darzeliai.csv"
          />
        <button onClick={this.handleDataFromUrlClick}>
          {
            this.state.loading
            ? 'Loading'
            : 'Load sample data from URL'
          }
        </button>
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

  handleDataFromUrlClick = (e) => {
    if (this.state.loading) {
      return false
    }
    this.setState({loading: true})
    fetch(this.refs.url.value)
      .then(response => response.text())
      .then(data => this.setState({value: data, loading: false}))
  }
}

export default App
