import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import PopoversBasic from '../../../components/example-components/Popovers/PopoversBasic';
export default function Popovers() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Popovers"
        // eslint-disable-next-line max-len
        titleDescription="Add small overlay content, like those found in iOS, to any element for housing secondary information."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <PopoversBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
