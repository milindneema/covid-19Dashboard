import React, { Component } from 'react';
import Country from './IndiaComponent';
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

        const response = await fetch('https://corona.lmao.ninja/v2/countries');
        const countries = await response.json();
        this.setState({ CountryData: countries, updated: countries[0].updated, loading: false })
    }


    countryData = () => {
        return (
            <div className="container">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" >
                        <TableHead bgcolor="palette.common.black" color="primary.contrastText">
                            <TableRow>
                                <TableCell><h2><strong>Country Name</strong></h2></TableCell>
                                <TableCell align="left"><h2><strong>Confirmed</strong></h2></TableCell>
                                <TableCell align="left"><h2><strong>Active</strong></h2></TableCell>
                                <TableCell align="left"><h2><strong>Recovered</strong></h2></TableCell>
                                <TableCell align="left"><h2><strong>Decreased</strong></h2></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.CountryData.map((country) => {
                                return (
                                    <TableRow key={country.country} >
                                        <TableCell component="th" scope="row">
                                            {country.country}
                                        </TableCell>
                                        <TableCell ><span>{country.cases}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;+{country.todayCases}</span></TableCell>
                                        <TableCell justifycontent="left">{country.active}</TableCell>
                                        <TableCell justifycontent="left">{country.recovered}</TableCell>
                                        <TableCell justifycontent="left">{country.deaths}<span>&nbsp;&nbsp;&nbsp;&nbsp;+{country.todayDeaths}</span></TableCell>
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
                    <Country data={this.state.CountryData} />
                    <br />
                    {this.countryData()}
                </Container>}
            </div>
        )
    }

}
export default CountryData;
