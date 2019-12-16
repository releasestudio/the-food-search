import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

export default function BusinessList(props){

  return (
    <div className="BusinessList">
      {
        props.businesses?
        props.businesses.map((business) => {
          return <Business key={business.id} business={business} />
        })
        :
        <h3>No results found</h3>
      }
    </div>
  );
}