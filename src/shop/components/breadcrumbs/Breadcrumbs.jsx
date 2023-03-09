import React from 'react';
import ArrowBack from '../svg/ArrowBack';
import ArrowBreadcrumbs from '../svg/ArrowBreadcrumbs';
import './breadcrumbs.scss';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__block">
        <div className="breadcrumbs__nav">
          <span className="breadcrumbs__page">Home</span>
          <ArrowBreadcrumbs />
          <ArrowBack />
          <span className="breadcrumbs__category">Electronics</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
