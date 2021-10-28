import SearchWrapper from "../forms/SearchWrapper"
import store from '../../store/store'
import {useSelector} from 'react-redux'
import {
    Card,
    CardContent,
} from '@mui/material'
import classes from './SingleWeather.css'
import l from '../../service/lang.service'

function SingleWeather () {
    const singleWeather = useSelector((state) => state.single_weather);
    const location = useSelector((state)=> state.location);

    function kelwinTemp(temp) {
        return (temp - 273.15).toFixed()
    }

    function switchLang() {
       let value = 'en';

       if(location === 'en') value = 'ru';
        else if (location === 'ru') value = 'en';

        store.dispatch({type: 'SET_LANG', value})
    }

    return (
        <div className={ classes.SingleWeather }>
            <SearchWrapper />

            {
                singleWeather &&

                <Card className={ classes.SingleWeather__card }>
                    <CardContent>
                        <div>
                            IMAGE
                        </div>
                        <div>
                            <ul className={ classes.SingleWeather__params }>
                                <li className={ classes.SingleWeather__param }>
                                    <span> { l('temp') } </span> { kelwinTemp(singleWeather.main.temp) }
                                </li>

                                <li className={ classes.SingleWeather__param }>
                                    <span>{ l('max_temp') }</span> { kelwinTemp(singleWeather.main.temp_max) }
                                </li>

                                <li className={ classes.SingleWeather__param }>
                                    <span>{ l('min_temp') }</span> { kelwinTemp(singleWeather.main.temp_min) }
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            }
            <div>
                <button onClick={ switchLang }>{ location === 'en' ? 'ru' : 'en' }</button>
            </div>
        </div>

    )
}

export default SingleWeather