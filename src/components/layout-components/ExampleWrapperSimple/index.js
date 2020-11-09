import React, { Component } from 'react';

import { Card, CardBody, CardHeader } from 'reactstrap';

export default class ExampleWrapperSimple extends Component {
  render() {
    const { children, sectionHeading } = this.props;

    return (
      <Card className="card-box mb-5">
        <CardHeader>
          <div className="card-header--title font-size-md font-weight-bold py-2">
            <b className="font-size-md">{sectionHeading}</b>
          </div>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    );
  }
}
