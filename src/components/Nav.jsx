import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <div className="navbar-item">
              <p className="subtitle is-5">
                <h1>PGSLP</h1>
              </p>
            </div>
          </div>

          <div className="navbar-right">
            <p className="navbar-item"><Link to={'/dashboard'}>Today</Link></p>
            <p className="navbar-item"><Link to={'/history'}>History</Link></p>
            <p className="navbar-item"><Link to={'/charts'}>Progress</Link></p>
            <p className="navbar-item">User</p>
          </div>
        </nav>
      </div>
    );
  }
}
