import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../svg/ArrowBack';
import ArrowBreadcrumbs from '../svg/ArrowBreadcrumbs';
import './breadcrumbs.scss';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__block">
        <div className="breadcrumbs__nav">
          <span className="breadcrumbs__page">Home</span>
          <ArrowBreadcrumbs />
          <ArrowBack onClick={() => navigate('/')} />
          <span className="breadcrumbs__category" onClick={() => navigate('/')}>
            Electronics
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
