import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <TextField
                    label="Search for Countries"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <SearchIcon />
                    }}
                    onChange={this.props.onSearchChange}
                    inputProps={{
                        autoComplete: "off"
                    }}
                />
            </section>
        );
    }
}

export default SearchBar;