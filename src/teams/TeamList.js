import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Team from './Team';
import TeamAPI from './TeamAPI';

class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      loading: true,
      page: 1,
      perPage: 5,
      totalTeams: 0,
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getTeams(this.state.page);
  }

  changePage(event, pageNumber) {
    this.getTeams(pageNumber);
  }

  getTeams(currentPage) {
    TeamAPI.getTeams(currentPage)
      .then((response) => {
        this.setState({
          teams: response.data,
          loading: false,
          totalTeams: response.headers.total,
          page: currentPage,
        });
      })
      .catch((err) => console.log('Error: ', err));
  }

  render() {
    const totalPage = Math.ceil(this.state.totalTeams / this.state.perPage);

    return (
      <div>
        <Typography
          variant='h4'
          color='inherit'
          style={{ marginBottom: '1rem' }}
        >
          Teams
        </Typography>

        {!this.state.loading ? (
          <React.Fragment>
            <Team teams={this.state.teams} />
            <Pagination
              page={this.state.page}
              count={totalPage}
              style={{
                marginTop: '2rem',
                display: 'flex',
                justifyContent: 'center',
              }}
              onChange={this.changePage}
            />
          </React.Fragment>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default TeamList;
