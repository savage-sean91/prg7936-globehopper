import React from 'react';
import './Home.css';
import CountryListResult from '../../components/CountryListResult';
import SearchBar from '../../components/SearchBar.js';
import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    FormControl,
    FormControlLabel,
    Grid
} from '@mui/material';

const CONTINENTS = [
    'Africa',
    'Antartica',
    'Asia',
    'Europe',
    'Oceania',
    'North America',
    'South America'
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            allCities: [],
            searchQuery: '',
            selectedContinents: [],
            loading: true
        };
        this.fetchCountries = this.fetchCountries.bind(this);
        this.onCountryFetchSuccess = this.onCountryFetchSuccess.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.isContinentSelected = this.isContinentSelected.bind(this);
        this.onContinentSelected = this.onContinentSelected.bind(this);
        this.filterCountries = this.filterCountries.bind(this);
    }

    componentDidMount() {
        this.fetchCountries();
    }

    onSearchChange(event) {
        this.setState({
            searchQuery: event.target.value
        });
    }

    isContinentSelected(continent) {
        return this.state.selectedContinents.indexOf(continent) > -1;
    }

    onContinentSelected(event) {
        let selections = [...this.state.selectedContinents];
        if (event.target.checked) {
            selections.push(event.target.name);
        } else {
            let currentIndex = selections.indexOf(event.target.name);
            selections.splice(currentIndex, 1);
        }
        this.setState({
            selectedContinents: selections
        });
    }

    filterCountries() {
        let searchValue = this.state.searchQuery.toLowerCase();
        let filteredCountries = this.state.allCountries.filter(c => {
            let lowerCaseName = c.name.toLowerCase();
            let nameMatch = false;
            let continentMatch = false;
            if (!searchValue) {
                nameMatch = true;
            } else if (lowerCaseName.indexOf(searchValue) > -1) {
                nameMatch = true;
            }

            // Look at selected continents
            if (this.state.selectedContinents.length === 0) {
                continentMatch = true;
            } else if (this.isContinentSelected(c.continent)) {
                continentMatch = true;
            }

            return nameMatch && continentMatch;
            //return nameMatch;
        });

        filteredCountries.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        return filteredCountries;
    }

    onCountryFetchSuccess(data) {
        // Save countries to state
        this.setState({ allCountries: data });

        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    onFetchFail(reason) {
        console.log(reason);
    }

    onFetchError(err) {
        console.log(err);
    }

    fetchCountries() {
        // Query API for country data
        fetch("/v1/countries")
            .then(res => res.json())    // returns a promise (Response promise)
            .then(this.onCountryFetchSuccess, this.onFetchFail)    // uses the response promise
            .catch(this.onFetchError);
    }

    render() {
        let filteredCountries = this.filterCountries();
        return (
            <main>
                {this.state.loading ? (
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <CircularProgress />
                        <p>Importing 195 countries for you to explore...</p>
                    </Box>
                ) : (
                    <Grid container>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <SearchBar onSearchChange={this.onSearchChange} />
                        </Grid>
                        <Grid item container xs={12} justifyContent="center">
                            {CONTINENTS.map((c, idx) => {
                                return (
                                    <Grid item key={idx}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.isContinentSelected(c)}
                                                    name={c}
                                                    onChange={this.onContinentSelected}
                                                />
                                            }
                                            label={c}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {filteredCountries.length === 0 ? (
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <p>No countries meet the selected criteria.</p>
                            </Grid>
                        ) : null}
                        {filteredCountries.map((c, idx) => {
                            return (
                                <Grid item xs={12} md={6} lg={4} key={idx}>
                                    <CountryListResult countryData={c} />
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
            </main>
        );
    }
}

export default Home;