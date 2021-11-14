import React, { Fragment } from "react"
import TextField from '@mui/material/TextField';
import "./Search.css";

const Search = () => (
  <Fragment>
    <TextField className="search-field" placeholder="Search records..." variant="outlined" />
  </Fragment>
  );

export default Search