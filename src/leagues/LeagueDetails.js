import React, { Component } from 'react';
import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import LeagueAPI from './LeagueAPI';

export default class LeagueDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: {},
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const leagueSlug = this.props.match.params.slug;

    LeagueAPI.getSingleLeague(leagueSlug)
      .then((res) => {
        this.setState({ league: res, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
      });
  }

  render() {
    const leagueDetailsUI =
      !this.state.error && !this.state.loading ? (
        <div>
          <Avatar
            alt="Remy Sharp"
            src={this.state.league.image_url}
            style={{ width: 200, height: 200, margin: '0 auto' }}
          />

          <Typography
            variant="h4"
            color="inherit"
            gutterBottom
            style={{ marginTop: '1rem' }}
          >
            {this.state.league.name}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Game : {this.state.league.videogame.name}
          </Typography>

          {this.state.league.series.map((serie) => {
            const options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            };
            serie.begin_at = new Intl.DateTimeFormat('en', options).format(
              new Date(serie.begin_at)
            );
            serie.end_at = new Intl.DateTimeFormat('en', options).format(
              new Date(serie.end_at)
            );

            return (
              <Card
                variant="outlined"
                key={serie.id}
                style={{ marginBottom: '1rem' }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {serie.full_name}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    From : {serie.begin_at} --To : {serie.end_at}
                  </Typography>
                </CardContent>

                {serie.winner_id ? (
                  <CardActions
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <Button color="primary" size="large">
                      <span role="img" aria-label="">
                        🏆
                      </span>
                      vainqueur
                      <span role="img" aria-label="">
                        🥇
                      </span>
                    </Button>
                  </CardActions>
                ) : null}
              </Card>
            );
          })}
        </div>
      ) : (
        <Typography variant="h4" color="error" style={{ marginBottom: '1rem' }}>
          {this.state.error}
        </Typography>
      );

    return <React.Fragment>{leagueDetailsUI}</React.Fragment>;
  }
}
