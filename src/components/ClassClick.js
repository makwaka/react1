import React, { Component } from 'react'

class ClassClick extends Component {
clickHandler() {
  console.log('Clicked');
}

  render() {
    return (
      <div>
        {/* No paranthesis or brackets added to the clickHandler method like clickHandler() */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick