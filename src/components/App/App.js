import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      businesses: [],
      loading: false,
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    this.setState({ loading: true })
    this.setState({ businesses: [] });
    Yelp.search(term, location, sortBy).then((allBusinesses) =>{
      this.setState({ businesses: allBusinesses });
      this.setState({ loading: false })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Food Search</h1>
        <SearchBar searchYelp={this.searchYelp} handleRefresh={this.handleRefresh} />
        {
        !this.state.loading?
        <BusinessList businesses={this.state.businesses} />
        :
        <div class="loader">Loading...</div>
        }
      </div>
        );
  }
}

export default App;