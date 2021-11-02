import { useEffect, useState } from "react"
import SearchInput from "../SearchInput"
import Navigation from "../Navigation/Navigation"
import SearchButton from "../SearchButton/SearchButton"
import classes from './SearchWrapper.module.css'
import request from '../../../service/request.service'
import { useSelector } from 'react-redux'
import store from '../../../store/store'




function SearchWrapper () {
    const city = useSelector((state) => state.city);

    useEffect(()=> {
        let urlParams = new URLSearchParams(window.location.search);
        let queryCity = urlParams.get('city');
        console.log(urlParams.toString());

        if(queryCity){
            setCityInput(queryCity);
            request.getWeatherFromCity(queryCity)
        }
    }, []);

    function setCityInput(val) {
        store.dispatch({type: 'SET_CITY', value: val})
    }

    function getLocationUser() {
        if(navigator) {
            navigator.geolocation.getCurrentPosition((position) => {

                const coords = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };

                request.getWeatherFromCoords(coords)
            });
        }else {
            console.log('Error navigator');
        }
    }


    return (
        <div className={classes.SearchWrapper}>
            <SearchInput
                city={ city }
                changeCity={ setCityInput }
            />

            <Navigation getLocation={ getLocationUser }/>

                <SearchButton
                    onSubmit={()=> { request.getWeatherFromCity(city) } }
                />
        </div>
    )
}

export default SearchWrapper