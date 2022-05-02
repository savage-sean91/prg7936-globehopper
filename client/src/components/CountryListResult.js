import React from 'react';
import './Country.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CountryDetailModal from './CountryDetailModal';
import Button from '@mui/material/Button';

class CountryListResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = function () {
        this.setState({ modalOpen : true});
    }

    closeModal = function () {
        this.setState({ modalOpen: false });
    }

    render() {
        if (this.props.countryData.hasOwnProperty('Cities')) {
            console.log(this.props.countryData.Cities);
        }
        return (
            <Card className="country-card">
                <CardHeader
                    title={this.props.countryData.Name}
                    titleTypographyProps={{
                        variant: "h4",
                        component: "h1"
                    }}
                />
                <CardContent>
                    <p><b>Continent: </b><span>{this.props.countryData.Continent}</span></p>
                    <p><b>Cities: </b><span>{this.props.countryData.Cities ? (this.props.countryData.Cities.length > 0 ? this.props.countryData.Cities.length : "No Cities") : 0}</span></p>
                </CardContent>
                <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" color="primary" onClick={this.openModal}>Learn More</Button>
                </CardActions>
                <CountryDetailModal
                    open={this.state.modalOpen}
                    closeModal={this.closeModal}
                    countryData={this.props.countryData}
                />
            </Card>
        );
    }
}

export default CountryListResult;