import './App.css';
import SingleWeather from './components/SingleWeather';
import { Provider } from 'react-redux';
import store from './store/store'
import {
    BrowserRouter as Router
} from 'react-router-dom'

function App() {
    // process.env.REACT_APP_API_KEY
    return (
        <Provider store={ store } className="App">
            <Router>
                <SingleWeather />
            </Router>
        </Provider>
    );
}

export default App;