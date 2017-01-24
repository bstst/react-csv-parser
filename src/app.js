import React from 'react'
import Parser from './parser'

import styles from './app.css'

class App extends React.Component {
  state = {
    value: "a,b,c\n1,\"2,2\",3\n4,5,6"
  }

  render () {
    return (
      <div>
        <textarea onChange={this.handleTextChange} value={this.state.value} className={styles.text} />
        <div>
          result:
          <Parser input={this.state.value} />
        </div>
      </div>
    )
  }

  handleTextChange = (e) => {
    this.setState({value: e.target.value})
  }
}

export default App