import React from 'react';
import AppBar from '../components/appBar/AppBar';
import {useParams} from 'react-router-dom';

const OrganizationDashboard = () => {
    let { organizationId } = useParams();

  return (
    <AppBar>
        <h4>OrganizationDashboard for {organizationId}</h4>;
    </AppBar>
  )
}

export default OrganizationDashboard