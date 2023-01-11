import { createStore,combineReducers} from 'redux'
import reducer from './reducer.jsx';



export const store = createStore(combineReducers({mainreducer:reducer}));
