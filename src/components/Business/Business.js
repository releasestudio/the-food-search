import React from 'react';
import './Business.css';



class Business extends React.Component {
  render() {
    const business = this.props.business;
    const googleMapsLink = 'https://www.google.com/maps/search/?api=1&query=' + business.name + '+' + business.city;
    return (
      <div className="Business">
        <a href={business.url} target="_blank">
          <div className="image-container">
              <img src={business.imageSrc} alt=''/>
          </div>
        </a>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <a className="Google-maps-link" href={googleMapsLink} target="_blank">
            <div className="Business-address">
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{business.zipCode}</p>
            </div>
          </a>
          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;