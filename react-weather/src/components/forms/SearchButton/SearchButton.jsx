import { Button } from '@mui/material'
import SearchIcon from '../../../assets icons/icons/searchmagnifierinterfacesymbol_79894.svg'
import classes from './SearchButton.module.css'

function SearchButton({ onSubmit }) {
    return (
        <div className={classes.SearchButton}>

            <Button
                className={classes.SearchButton__element}
                variant="contained"
                onClick={ onSubmit }
            >
                <img src={SearchIcon} alt="" />

            </Button>

        </div>
    )
}

export default SearchButton