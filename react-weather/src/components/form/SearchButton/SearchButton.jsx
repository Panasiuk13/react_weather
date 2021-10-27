import { Button } from '@mui/material'
import SeacthIcon from '../../../assecc icons/icons/searchmagnifierinterfacesymbol_79894.svg'
import classes from './SearchButton.module.css'

function SearchButton({ onSubmit }) {
    return (
        <div className={classes.SeacrhButton}>

            <Button
                className={classes.SeacrhButton__element}
                variant="contained"
                onClick={ onSubmit }
            >
                <img src={SeacthIcon} alt="" />

            </Button>

        </div>
    )
}

export default SearchButton