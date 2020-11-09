import React, { Component } from 'react';

export default class ExampleWrapperContainer extends Component {
  render() {
    const { children, sectionHeading } = this.props;

    return (
      <div className="example-card-container mb-5">
        <div className="container">
          <h5 className="display-4 mb-4 font-weight-bold">
            {sectionHeading}
          </h5>
          {children}
        </div>
      </div>
    );
  }
}
