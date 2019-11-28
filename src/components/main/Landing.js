import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';
import MoviesContainer from './MoviesContainer';
import Spinner from '../Spinner';

  export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchBox />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);