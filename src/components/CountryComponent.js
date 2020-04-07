import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class CountryData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            CountryData: null,
            updated: null
        };
    }

    async componentDidMount() {

        const response = await fetch('https://corona.lmao.ninja/countries');
        const countries = await response.json();
        this.setState({ CountryData: countries, updated: countries[0].updated, loading: false })
    }


    countryData = () => {
        // const active = this.state.indiaData.confirmed.value - this.state.indiaData.deaths.value - this.state.indiaData.recovered.value
        return (
            <div className="container">
                <h3 align="right">
                    {new Date(this.state.updated).toLocaleString()}
                </h3>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead bgcolor="palette.common.black" color="primary.contrastText">
                            <TableRow>
                                <TableCell><strong>Country Name</strong></TableCell>
                                <TableCell align="right"><strong>Confirmed</strong></TableCell>
                                <TableCell align="right"><strong>Active</strong></TableCell>
                                <TableCell align="right"><strong>Recovered</strong></TableCell>
                                <TableCell align="right"><strong>Decreased</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.CountryData.map((country) => {
                                return (
                                    <TableRow key={country.country} >
                                        <TableCell component="th" scope="row">
                                            {country.country}
                                        </TableCell>
                                        <TableCell align="right">{country.cases}</TableCell>
                                        <TableCell align="right">{country.active}</TableCell>
                                        <TableCell align="right">{country.recovered}</TableCell>
                                        <TableCell align="right">{country.deaths}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.state.loading ? <div><p>Loading...</p></div> : <Container fixed>
                    {this.countryData()}
                </Container>}
            </div>
        )
    }

}
export default CountryData;
