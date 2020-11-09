import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import TabsBasic from '../../../components/example-components/Tabs/TabsBasic';
export default function Tabs() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tabs"
        titleDescription="Tabs are used to split content between multiple sections. Wide variety available."
      />

      <WrapperSimple sectionHeading="Basic tabs">
        <TabsBasic />
      </WrapperSimple>
    </Fragment>
  );
}
