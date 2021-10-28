import { TextField } from '@mui/material'
import l from '../../../service/lang.service'


function SearchInput({ city, changeCity }) {
   return (
       <TextField
           placeholder="Minsk"
           value={ city }
           label={ l("city") }
           size="large"
           onChange={ (e) => { changeCity(e.target.value) } }
       />
   )
}

export default SearchInput