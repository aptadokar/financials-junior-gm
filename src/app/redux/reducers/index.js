import { combineReducers } from 'redux';
import tutorial from './tutorials.reducer';
import overlay from './overlay.reducer';
import studentState from './student-state.reducer';
import players from './players.reducer';

export default combineReducers({
  tutorial,
  overlay,
  studentState,
  players,
});
