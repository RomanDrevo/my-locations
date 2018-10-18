import React from 'react'
import {Link} from "react-router-dom";

class MenuItem extends React.Component {

  // handleClick = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   this.props.onClick(e)
  //   if (this.props.href) {
  //     window.open(this.props.href)
  //   } else if (this.props.to) {
  //     this.props.history.push(this.props.to)
  //   }
  // }
  render() {

    return (
      <li className={`nav-item`}>
        <div className="nav-link" onClick={this.handleClick}>

        </div>
      </li>
    )
  }
}

export default MenuItem
