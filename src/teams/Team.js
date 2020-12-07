import React from 'react';
import {
  Card,
  Typography,
  CardMedia,
  Button,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Team(props) {
  const classes = {
    root: {
      display: 'flex',
      marginBottom: '1rem',
      justifyContent: 'space-around',
      padding: '1rem',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 150,
    },
    linkStyle: {
      textDecoration: 'none',
      color: 'inherit',
    },
  };

  const teamUI = props.teams
    .filter((team) => team.image_url !== null)
    .map((team) => {
      return (
        <Card style={classes.root} key={team.id}>
          <div style={classes.details}>
            <CardContent style={classes.content}>
              <Typography component="h5" variant="h5">
                {team.name}
              </Typography>
              <Button size="large" color="primary">
                <Link to={`/teams/${team.slug}`} style={classes.linkStyle}>
                  details
                </Link>
              </Button>
            </CardContent>
          </div>
          <CardMedia
            component="img"
            style={classes.cover}
            src={team.image_url}
            title="Live from space album cover"
          />
        </Card>
      );
    });

  return <div>{teamUI}</div>;
}

export default Team;
