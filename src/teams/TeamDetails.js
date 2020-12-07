import React, { Component } from 'react';
import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import TeamAPI from './TeamAPI';

export default class TeamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const teamSlug = this.props.match.params.slug;

    TeamAPI.getSingleTeam(teamSlug)
      .then((res) => {
        this.setState({ team: res, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
      });
  }

  render() {
    const teamDetailsUI =
      !this.state.error && !this.state.loading ? (
        <div>
          <Avatar
            alt="Remy Sharp"
            src={this.state.team.image_url}
            style={{ width: 200, height: 200, margin: '0 auto' }}
          />

          <Typography
            variant="h4"
            color="inherit"
            gutterBottom
            style={{ marginTop: '1rem' }}
          >
            {this.state.team.name}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Game : {this.state.team.current_videogame.name}
          </Typography>

              <Card
                variant="outlined"
                style={{ marginBottom: '1rem' }}
              >
                <CardContent>
                {this.state.team.series.map((serie) => {
            
            return ()}
                  <Typography variant="h5" gutterBottom>
                    {serie.full_name}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    From : {serie.begin_at} --To : {serie.end_at}
                  </Typography>
                </CardContent>

              </Card>
            );
          })}
        </div>
      ) : (
        <Typography variant="h4" color="error" style={{ marginBottom: '1rem' }}>
          {this.state.error}
        </Typography>
      );

    return <React.Fragment>{teamDetailsUI}</React.Fragment>;
  }
}
