import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption){
      return 'active';
    }
     return '';
  }
  
  handleTermChange(event){
    this.setState({ term: event.target.value });
  };

  handleLocationChange(event){
    this.setState({ location: event.target.value });
  };

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  };

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
    if(this.state.term && this.state.location){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }
  };

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue} 
      className={this.getSortByClass(sortByOptionValue)} 
      onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  };
  handleEnter(e){
    if (e.charCode === 13) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      e.preventDefault();
    }
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Retaurant Type" onChange={this.handleTermChange} onKeyPress={this.handleEnter}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} onKeyPress={this.handleEnter} />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;