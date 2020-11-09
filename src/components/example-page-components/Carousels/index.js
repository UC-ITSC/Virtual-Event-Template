import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import CarouselsBasic from '../../../components/example-components/Carousels/CarouselsBasic';
export default function Carousels() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Carousels"
        titleDescription="Create easy, simple to use and beautiful slideshows &amp; carousels with these components."
      />

      <WrapperSimple sectionHeading="Basic carousel">
        <CarouselsBasic />
      </WrapperSimple>
    </Fragment>
  );
}
