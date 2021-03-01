import Navbar from './layout/Navbar';
import TeamList from './teams/TeamList';
import LeagueList from './leagues/LeagueList';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LeagueDetails from './leagues/LeagueDetails';
import TeamDetails from './teams/TeamDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container fixed style={{ padding: '3rem 0' }}>
          <Grid container justify='center' style={{ textAlign: 'center' }}>
            <Route exact path='/'>
              <Redirect to='/leagues' />
            </Route>
            <Route exact path='/teams' component={TeamList}></Route>
            <Route path='/teams/:slug' component={TeamDetails}></Route>
            <Route exact path='/leagues' component={LeagueList}></Route>
            <Route path='/leagues/:slug' component={LeagueDetails}></Route>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;
