import React, { Component } from 'react';

export default class Link extends Component {
  render() {
    const {children, className} = this.props;

    return (
      <a
        className = {className}
        title={title ? title : ''}>
        {children}
      </a>
    );
  }
};
