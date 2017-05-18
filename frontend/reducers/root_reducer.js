import { combineReducers } from 'redux';
import DataReducer from './data_reducer';
import SettingsReducer from './settings_reducer';

const RootReducer = combineReducers({
  data: DataReducer,
  settings: SettingsReducer
});

export default RootReducer;
