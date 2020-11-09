import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import RegularTables1Example1 from '../../../components/example-components/RegularTables1/RegularTables1Example1';
export default function RegularTables1() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tables examples 1"
        titleDescription="Tables are the backbone of almost all web applications."
      />

      <WrapperSimple sectionHeading="Basic">
        <RegularTables1Example1 />
      </WrapperSimple>
    </Fragment>
  );
}
