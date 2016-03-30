import React, {Component, PropTypes} from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar">
        {/* Left Side */}
        <div class="navbar-left">
          <div class="navbar-item">
            <p class="subtitle is-5">
              <strong>123</strong> posts
            </p>
          </div>
        </div>
      </nav>
    );
  }
};
