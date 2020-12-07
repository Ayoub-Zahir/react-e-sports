import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import League from './League';
import LeagueAPI from './LeagueAPI';

class LeagueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: [],
      loading: true,
      page: 1,
      perPage: 5,
      totalLeagues: 0,
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getLeagues(this.state.page);
  }

  changePage(event, pageNumber) {
    this.getLeagues(pageNumber);
  }

  getLeagues(currentPage) {
    LeagueAPI.getLeagues(currentPage)
      .then((response) => {
        this.setState({
          leagues: response.data,
          loading: false,
          totalLeagues: response.headers.total,
          page: currentPage,
        });
      })
      .catch((err) => console.log('Error: ', err));
  }

  render() {
    const totalPage = Math.ceil(this.state.totalLeagues / this.state.perPage);

    return (
      <div>
        <Typography
          variant="h4"
          color="inherit"
          style={{ marginBottom: '1rem' }}
        >
          Leagues
        </Typography>

        {!this.state.loading ? (
          <League leagues={this.state.leagues} />
        ) : (
          <Pagination
            page={this.state.page}
            count={totalPage}
            style={{ marginTop: '2rem' }}
            onChange={this.changePage}
          />
        )}
      </div>
    );
  }
}

export default LeagueList;
