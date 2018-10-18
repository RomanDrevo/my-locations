import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import React from 'react'
import './Menu.scss'
// import activity from '../../icons/activity.svg'
// import audiences from '../../icons/audiences.svg'
// import balance from '../../icons/balance.svg'
// import businesses from '../../icons/businesses.svg'
// import BusinessList from '../Business/BusinessList'
// import dashboard from '../../icons/dashboard.svg'
// import discover from '../../icons/discover.svg'
// import favorites from '../../icons/favorites.svg'
// import gift from '../../icons/gift.svg'
// import icSwitch from '../../icons/switch.svg'
// import images from '../../icons/images.svg'
// import messagesIcon from '../../icons/messages.svg'
import MenuItem from './MenuItem'


class Menu extends React.PureComponent {

  state = {
      visible: true
  }

    onMenuClose = () =>{
      this.setState({visible: false})
    }

  render() {
    return (
      <div
        className={`Menu ${(this.state.visible) ? 'show' : ''}`}
        id="offCanvasMenu"
      >
        <a className="close-btn" onClick={this.onMenuClose}>&times;</a>
        <ul className="nav flex-column">
          <li className="nav-header">
              <div className="profile-data">
                <h3>
                  Guest
                </h3>
                <div className="userIcon">
                  {/*<img alt="" src={userIcon} />*/}
                </div>
              </div>

              <div className="profile-data">
                <h5>Vasia Huikin</h5>
                <h6>huikin@gmail</h6>
                <div className="userIcon">
                  {/*<img alt="" src={user.profile_media_url} />*/}
                </div>
              </div>


              <div className="business-data">
                <h5>
                  Vasia Huikin LTD
                </h5>
              </div>

          </li>

            <MenuItem onClick={this.onMenuClose} to="/user/messages">
              Notifications
            </MenuItem>

            <MenuItem onClick={this.onMenuClose} to="/user/messages">
                Notifications
            </MenuItem>

            <MenuItem onClick={this.onMenuClose} to="/user/messages">
                Notifications
            </MenuItem>

        </ul>
      </div>
    )
  }
}

export default Menu
