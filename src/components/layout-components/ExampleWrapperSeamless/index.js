import React, { Component } from 'react';

export default class ExampleWrapperSeamless extends Component {
  render() {
    const { children, sectionHeading } = this.props;

    return (
      <div className="example-card-seamless mb-5">
        <h5 className="display-4 mb-4 font-weight-bold">
          {sectionHeading}
        </h5>
        {children}
      </div>
    );
  }
}
