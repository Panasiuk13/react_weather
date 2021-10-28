import './App.css';
import SingleWeather from './components/SingleWeather/SingleWeather';
import {Provider} from 'react-redux'
import store from './store/store'

function App() {
  // process.env.REACT_APP_API_KEY
  return (
      <Provider className="App">
        <SingleWeather />
        </Provider>
  );
}

export default App;