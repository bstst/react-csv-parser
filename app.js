import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>hello!!</div>
    )
  }
}

const data = {hey: 1}

ReactDOM.render(
  <App data={data} />,
  document.querySelector('#root')
)