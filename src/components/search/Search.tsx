import { InputAdornment, TextField } from '@mui/material';
import styles from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const heandleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <TextField
      className={styles.search}
      size="small"
      placeholder="Поиск"
      onChange={heandleSearch}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
export default Search;
