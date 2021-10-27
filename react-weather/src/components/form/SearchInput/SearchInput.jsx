import { TextField } from '@mui/material'

function SearchInput({ city, changeCity }) {
   return (
       <TextField
           placeholder="Minsk"
           value={ city }
           label="City"
           size="large"
           onChange={ (e) => { changeCity(e.target.value) } }
       />
   )
}

export default SearchInput