import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import ScrollableBasic from '../../../components/example-components/Scrollable/ScrollableBasic';
export default function Scrollable() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Scrollable"
        titleDescription="Add scrolling areas to any elements with custom scrollbars or default browser ones."
      />

      <WrapperSimple sectionHeading="Custom scrollbars & Sizing">
        <ScrollableBasic />
      </WrapperSimple>
    </Fragment>
  );
}
