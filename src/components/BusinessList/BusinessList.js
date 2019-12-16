import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {

  render(){
    return (
      <div className="BusinessList">
        {
          this.props.businesses?
          this.props.businesses.map((business) => {
            return <Business key={business.id} business={business} />
          })
          :
          <h3>No results found</h3>
        }
      </div>
    );
  }
}

export default BusinessList;