import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import Season from './pages/Season';
import ScoutPage from './pages/ScoutPage';
import { IceBackground } from '@components';
import BudgetPage from './pages/BudgetPage';
import Sign from './components/Sign';
import { getStudent, getPlayers } from './dummy-data';
import { setStudent } from '@redux/actions';
import '@css/App.css';
import { setInitialPlayersState } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getStudent()
      .then((s) => dispatch(setStudent(s)))
      .catch((err) => console.error(err));

    getPlayers()
      .then((p) => dispatch(setInitialPlayersState(p)))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div className='app-container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/team' component={TeamPage} />
          <Route exact path='/scout' component={ScoutPage} />
          <Route exact path='/sign' component={Sign} />
          <Route exact path='/budget' component={BudgetPage} />
          <Route exact path='/season' component={Season} />
        </Switch>
        <IceBackground />
      </Router>
    </div>
  );
};

export default App;
